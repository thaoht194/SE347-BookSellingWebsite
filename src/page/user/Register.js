import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const Register = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
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

  const onSubmit = (values) => {};

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
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-96 flex flex-col mt-5 md:mt-10 gap-5 border p-10 border-gray-300 rounded shadow-lg">
          <h1 className="text-center font-bold text-2xl">Tạo tài khoản</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Email của bạn"
                className="p-2 rounded border w-full"
                id="email"
                type="email"
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
                placeholder="Mật khẩu"
                className="p-2 rounded border w-full"
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && !errors.email && touched.password && (
                <p className="text-red-500 ml-1">{errors.password}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Xác nhận mật khẩu"
                className="p-2 rounded border w-full"
                id="re_password"
                type="password"
                value={values.re_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.re_password &&
                !errors.password &&
                touched.re_password && (
                  <p className="text-red-500 ml-1">{errors.re_password}</p>
                )}
            </div>
            <div>
              <input
                placeholder="Tên người dùng"
                className="p-2 rounded border w-full"
                id="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && !errors.re_password && touched.name && (
                <p className="text-red-500 ml-1">{errors.name}</p>
              )}
            </div>
          </form>
          <label className="hover:cursor-pointer">
            <input className="mr-2" type="checkbox" />
            Giữ đăng nhập tài khoản
          </label>
          <label className="hover:cursor-pointer">
            <input className="mr-2" type="checkbox" />
            Gửi thông báo về e-mail!
          </label>
          <button
            className="w-full py-2 bg-green-600 hover:bg-blue-600 text-white rounded"
            type="submit"
          >
            Tạo tài khoản
          </button>
          <hr className="my-5" />
          <Link to="/Login">
            <button className="w-full py-2 border-[2px] rounded hover:bg-gray-200">
              Đăng nhập
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
