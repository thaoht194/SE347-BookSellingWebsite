import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";
import "react-tooltip/dist/react-tooltip.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { notification, Tooltip } from "antd";
import Users from "../../StaticData/DataFrontEnd/Home/Account.json";
import { useBackendVariable } from "./Backend/BackendVariable";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (username) => {
    api.info({
      description: `Chào mừng ${username} quay trở lại!`,
      placement: "top",
      duration: 2,
      icon: <TiTick className="text-white rounded-full p-1 bg-green-400" />,
    });
  };
  const backendVariable = useBackendVariable();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onSubmit = (values) => {
    Users.every(function (element) {
      if (element.email === values.email && element.pass === values.password) {
        backendVariable.user = element;
        openNotification(backendVariable.user.username);
        setTimeout(() => {
          backendVariable.isLogged = true;
          history("/");
        }, 2000);
        return false;
      } else return true;
    });
  };

  
  const ruleSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email không khả dụng!")
      .required("Vui lòng điền email!"),
    password: yup
      .string()
      .min(8, "Mật khẩu tối thiểu 8 ký tự!")
      .matches(passwordRules, {
        message:
          "Mật khẩu có ít nhất 1 ký tự hoa, 1 ký tự thường và 1 chữ số !",
      })
      .required("Vui lòng điền mật khẩu!"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp!")
      .required("Vui lòng xác nhận lại mật khẩu!"),
    name: yup
      .string()
      .min(1, "Tên tối thiểu 1 ký tự!")
      .required("Vui lòng nhập tên người dùng!"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: ruleSchema,
      onSubmit,
    });

  return (
    <>
      {contextHolder}
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-96 flex flex-col mt-5 md:mt-10 gap-3 border p-10 border-gray-300 rounded shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-5">Đăng nhập</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              {" "}
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email của bạn"
                className="p-2 rounded border w-full"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 ml-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mật khẩu"
                className="p-2 rounded border w-full"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.password && !errors.email && touched.password && (
                <p className="text-red-500 ml-1">{errors.password}</p>
              )}
            </div>
          </form>
          <a
            className="opacity-80 text-blue-600 hover:cursor-pointer hover:italic hover:underline hover:text-blue-800"
            href
          >
            Quên mật khẩu?
          </a>
          <label>
            <input className="mr-2" type="checkbox" />
            Nhớ mật khẩu
            <Tooltip
              title="Bằng cách nhấp vào hộp thoại này, bạn sẽ không cần phải thực hiện thao tác đăng nhập vào những lần kế tiếp. Lưu ý: Chỉ nên thực hiện việc này trên thiết bị của bạn."
              color={"black"}
            >
              <AiFillQuestionCircle className="inline-block text-green-800" />
            </Tooltip>
          </label>
          <button
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded my-5"
            type="submit"
          >
            Đăng nhập
          </button>
          <button className="w-full py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex justify-center items-center gap-2">
            <FcGoogle className="w-7 h-7 bg-white rounded" />
            Đăng nhập bằng Google
          </button>
          <hr className="my-5" />
          <Link to="/register">
            <button className="w-full py-2 border-[2px] rounded font-semibold hover:bg-gray-200">
              Tạo tài khoản
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
