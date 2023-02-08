import { Breadcrumb, DatePicker, Form, Input, Layout, Menu, Radio } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiNotepad } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { AiOutlineStar, AiFillHeart } from "react-icons/ai";
import moment from "moment";

const Account = () => {
  const location = useLocation();
  const history = useNavigate();
  return (
    <div className="flex flex-col gap-5 mt-5 px-[50px] md:px-[100px] lg:px-[500px]">
      <div>
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
            <Link to={`/`}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <Layout>
          <Sider
            width={200}
            style={{
              background: "white",
            }}
          >
            <Menu
              mode="inline"
              // className="h-screen"
              //style={{ height: '100%' }}
              selectedKeys={[
                location.pathname === "/Customer/Profile"
                  ? "1"
                  : location.pathname === "/Notifications"
                  ? "2"
                  : location.pathname === "/Order/History"
                  ? "3"
                  : location.pathname === "/Customer/Address"
                  ? "4"
                  : location.pathname === "/Customer/Paymentcard"
                  ? "5"
                  : location.pathname === "/Customer/Review"
                  ? "6"
                  : location.pathname === "/Customer/Wishlish"
                  ? "7"
                  : "-1",
              ]}
              defaultOpenKeys="1"
              defaultSelectedKeys={"1"}
            >
              {/* <div className="logo"></div> */}
              <Menu.Item
                key="1"
                icon={<BsFillPersonFill />}
                onClick={() => {
                  history.push("/Customer/Profile");
                }}
              >
                Thông tin tài khoản
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<IoMdNotificationsOutline />}
                onClick={() => {
                  history.push("/Notifications");
                }}
              >
                Thông báo của tôi
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<BiNotepad />}
                onClick={() => {
                  history.push("/Order/History");
                }}
              >
                Quản lý đơn hàng
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<GrLocation />}
                onClick={() => {
                  history.push("/Customer/Address");
                }}
              >
                Sổ địa chỉ
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<BsFillCreditCard2BackFill />}
                onClick={() => {
                  history.push("/Customer/Paymentcard");
                }}
              >
                Thông tin thanh toán
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<AiOutlineStar />}
                onClick={() => {
                  history.push("/Customer/Review");
                }}
              >
                Nhận xét của tôi
              </Menu.Item>

              <Menu.Item
                key="7"
                icon={<AiFillHeart />}
                onClick={() => {
                  history.push("/Customer/Wishlish");
                }}
              >
                Sản phẩm yêu thích
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: "white",
              }}
            >
              <div className="flex gap-5">
                <div className="grow flex flex-col gap-5">
                  <div className="text-gray-500 text-lg">Thông tin cá nhân</div>
                  <div className="flex gap-5">
                    <img
                      className="rounded-full h-20 w-20"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex justify-between items-center">
                        <span>Họ & tên</span>
                        <Input
                          className="max-w-xs"
                          placeholder="Họ & tên"
                          defaultValue={"Huỳnh Trung Thảo"}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Tên người dùng</span>
                        <Input
                          className="max-w-xs"
                          placeholder="Tên người dùng"
                          defaultValue={"thaohuynh196"}
                        />
                      </div>
                    </div>
                  </div>
                  <Form
                    labelCol={{
                      span: 4,
                    }}
                    wrapperCol={{
                      span: 14,
                      push: 2,
                    }}
                    layout="horizontal"
                  >
                    <Form.Item label="Ngày sinh">
                      <DatePicker
                        format={"DD/MM/YYYY"}
                        defaultValue={moment("2002-04-25")}
                      />
                    </Form.Item>
                    <Form.Item label="Giới tính">
                      <Radio.Group defaultValue={0}>
                        <Radio value={0}>Nam</Radio>
                        <Radio value={1}>Nữ</Radio>
                        <Radio value={2}>Khác</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                      <div className="flex justify-between items-center">
                        <label>09495757698</label>
                        <div className="py-1 px-2 border rounded-md border-blue-500 text-blue-500 hover:cursor-pointer hover:opacity-80">
                          Cập nhật
                        </div>
                      </div>
                    </Form.Item>
                    <Form.Item label="Email">
                      <div className="flex justify-between items-center">
                        <label>shdg@gmail.com</label>
                        <div className="py-1 px-2 border rounded-md border-blue-500 text-blue-500 hover:cursor-pointer hover:opacity-80">
                          Cập nhật
                        </div>
                      </div>
                    </Form.Item>
                    <Form.Item label="Đổi mật khẩu">
                      <div className="flex justify-between items-center">
                        <Input.Password
                          className="w-40"
                          defaultValue="12345678"
                          placeholder="input password"
                          disabled
                        />
                        <div className="py-1 px-2 border rounded-md border-blue-500 text-blue-500 hover:cursor-pointer hover:opacity-80">
                          Cập nhật
                        </div>
                      </div>
                    </Form.Item>
                    <Form.Item label=" ">
                      <button className="py-2 px-4 border border-gray-200 bg-red-500 hover:opacity-90 rounded-md text-white">
                        Lưu thay đổi
                      </button>
                    </Form.Item>
                  </Form>
                </div>
                {/* <div className="bg-gray-200 border-l min-h-full"></div>
                <div className="grow">abc</div> */}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Account;
