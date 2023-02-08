import React from "react";
import { BsFillPersonFill, BsCaretDownFill, BsPerson } from "react-icons/bs";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiFillGift,
  AiFillBook,
  AiFillTags,
} from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";
import Categories from "../../StaticData/DataFrontEnd/Home/Categories.json";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../common/images/dinob_logo.png";
import { useState } from "react";

export const Header = (props) => {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <>
      <div className="bg-white w-full">
        {/* Header top ở đây */}
        <div className="bg-green-500 w-full flex justify-between items-center py-1 px-5">
          <button className="text-green-800">Mua số lượng lớn!</button>
          <div className="flex gap-10">
            <button className="flex items-center gap-1">
              <AiFillTags />
              Khuyến mãi
            </button>
            <button className="flex items-center gap-1">
              <AiFillBook />
              Quà tặng
            </button>
            <button className="flex items-center gap-1">
              <AiFillGift />
              Phiếu mua hàng
            </button>
            <button className="flex items-center gap-1">
              <FaCarSide />
              Tra cứu đơn hàng
            </button>
          </div>
        </div>

        {/* Header bottom ở đây */}
        <div className="grid grid-flow-col grid-cols-10 py-3 justify-center items-center">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <img className="w-32" src={logo} alt="" />
            </Link>
          </div>
          {/* Categories */}
          <div className="space-y-2">
            <button
              className="flex justify-center items-center gap-2 p-3 w-fit bg-gray-300 hover:bg-gray-400 rounded-md"
              onClick={() => {
                setShowCategories(!showCategories);
              }}
              onBlur={() => {
                setShowCategories(false);
              }}
            >
              Danh mục
              {!showCategories && <AiOutlineDown />}
              {showCategories && <AiOutlineUp />}
            </button>
            {showCategories && (
              <div className="absolute grid grid-rows-6 grid-flow-col bg-white p-5 gap-x-10 gap-y-2 rounded-md border border-gray-300 shadow-md text-sm">
                {Categories &&
                  Categories.map((item) => {
                    return (
                      <Link to={item.path}>
                        <div className="font-semibold hover:text-green-600 hover:cursor-pointer">
                          {item.name}
                        </div>
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Thanh tìm kiếm */}
          <div className="col-span-4 lg:col-span-6 flex flex-row flex-r items-center sm:justify-items-start md:justify-center">
            <input
              maxLength={40}
              className="align-middle border border-black-500 h-10 p-2 w-5/6 shadow-md focus:placeholder-transparent outline-none"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <button
              type="submit"
              className="h-10 p-2 w-auto bg-gray-200 hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          {/* Chức năng */}
          <div className="col-span-4 lg:col-span-2 flex flex-wrap justify-start items-center gap-x-5 md:gap-x-10">
            <Link to="/Login">
              {!props.isLogged && (
                <div className="inline-block whitespace-nowrap hover:cursor-pointer hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 inline mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Đăng nhập
                </div>
              )}
            </Link>
            <Link to="/Register">
              {!props.isLogged && (
                <div className="inline-block whitespace-nowrap hover:cursor-pointer hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 inline mr-1"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                  Đăng kí
                </div>
              )}
            </Link>

            {/* Tài khoản người dùng */}
            <Link to="/Customer/Profile">
              {props.isLogged && (
                <div className="flex gap-2 text-sm items-center col-span-2">
                  <BsPerson className="text-2xl" />
                  <span className="flex flex-col">
                    <span>Tài khoản</span>
                    <span className="line-clamp-1">Huỳnh Trung Thảo</span>
                  </span>
                </div>
              )}
            </Link>

            {/* Giỏ hàng */}
            <Link to="/Cart">
              <div className="inline-block whitespace-nowrap hover:cursor-pointer">
                <ShoppingCartOutlined className="text-2xl md:justify-center" />
                <div className="text-white w-6 h-6 inline-block absolute rounded-xl bg-green-900 text-center">
                  {"2"}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
