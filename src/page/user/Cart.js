import { DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  Image,
  Input,
  InputNumber,
  Rate,
  Space,
  Table,
  Tooltip,
} from "antd";
import React from "react";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { RiCoupon2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import BestSelling from "../../StaticData/DataFrontEnd/Home/BestSelling.json";

export const Cart = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: (record) => {
        return (
          <Space>
            <span>Tất cả</span>
            <span>{"(" + data.length + " sản phẩm)"}</span>
          </Space>
        );
      },
      render: (record) => {
        return (
          <div className="flex gap-5 hover:cursor-pointer w-fit">
            <Image width={60} src={record.imageLink} />
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold hover:text-green-700 hover:underline hover:cursor-pointer">
                {record.title}
              </div>
              <div className="text-[12px]">
                <div>{"Tác giả: " + record.author}</div>
                <div>{"Ngôn ngữ: " + record.language}</div>
                <div>{"Số trang: " + record.pages}</div>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Đơn giá",
      render: (record) => {
        return (
          <Space>
            <div className="font-semibold text-sm inline-block">
              {record.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              <sup>đ</sup>
            </div>
            <div className="font-semibold text-xs text-gray-400 line-through inline-block">
              {record.listedPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              <sup>đ</sup>
            </div>
          </Space>
        );
      },
    },
    {
      title: "Số lượng",
      render: (record) => {
        return (
          <InputNumber
            defaultValue={record.selectedCount}
            min={1}
            width="50px"
          />
        );
      },
    },
    {
      title: "Thành tiền",
      render: (record) => {
        return (
          <div className="text-red-500 text-base font-semibold">
            {record.price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            <sup>đ</sup>
          </div>
        );
      },
    },
    {
      title: () => {
        return (
          <Tooltip
            className="text-black"
            title={<span className="text-black">Xóa mục đã chọn</span>}
            color={"#f3f4f6"}
            arrowPointAtCenter={true}
          >
            {" "}
            <button>
              <DeleteOutlined className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full p-3" />
            </button>
          </Tooltip>
        );
      },
      width: "50px",
      render: () => {
        return (
          <button>
            <DeleteOutlined className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full p-3" />
          </button>
        );
      },
    },
  ];
  const data = [
    {
      id: 1,
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink:
        "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/things-fall-apart.jpg?raw=true",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958,
      price: 120000,
      listedPrice: 150000,
      sale: 1324,
      selectedCount: 1,
      rate_5: 132,
      rate_4: 76,
      rate_3: 32,
      rate_2: 10,
      rate_1: 10,
    },
    {
      id: 2,
      author: "Hans Christian Andersen",
      country: "Denmark",
      imageLink:
        "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/fairy-tales.jpg",
      language: "Danish",
      link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      pages: 784,
      title: "Fairy tales",
      year: 1836,
      price: 99000,
      listedPrice: 120000,
      sale: 827,
      selectedCount: 1,
      rate_5: 432,
      rate_4: 130,
      rate_3: 65,
      rate_2: 20,
      rate_1: 15,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5 mt-5 px-[50px] md:px-[100px] lg:px-[200px]">
        <div className="text-2xl font-semibold">GIỎ HÀNG</div>
        <div className="flex flex-wrap gap-10">
          {/* Bảng thông tin sản phẩm */}
          <div className="grow">
            <Table
              rowSelection={{ rowSelection: "Chọn tất cả" }}
              columns={columns}
              dataSource={data}
              pagination={false}
              rowKey={(record) => record.id}
            />
          </div>
          <div className="w-[300px] flex flex-col gap-3">
            {/* Thông tin nhận hàng */}
            <div className="bg-white p-3 flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="text-gray-500 text-lg">Giao đến</label>
                <span className="text-blue-500 hover:cursor-pointer">
                  Thay đổi
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">
                  {"Người nhận: "}
                  {"Huỳnh Trung Thảo"}
                  {" | "}
                  {"0949757401"}
                </div>
                <div className="text-sm text-gray-500">
                  {"Địa chỉ: "}
                  {"20/12 Đường 25, Khu 5, Hiệp Bình Chánh, Thủ Đức"}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <span className="underline italic">Lưu ý:</span> Miễn phí vận
                chuyển cho hóa đơn từ 300,000
                <sup>đ</sup>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-2">
              {/* Mã giảm giá */}
              <div className="px-3 pt-3 flex flex-col gap-2">
                <div className="text-lg">Mã giảm giá</div>
                <div className="flex gap-2">
                  <Input
                    size="large"
                    addonBefore={<RiCoupon2Line />}
                    placeholder="Nhập mã giảm giá"
                  />
                  <button
                    className="text-white bg-green-600 hover:opacity-80 rounded-md p-2 whitespace-nowrap"
                    type="submit"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
              <hr />
              {/* Tính toán sơ bộ hóa đơn */}
              <div className="flex flex-col gap-2 px-3">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span className="font-semibold">
                    219,000<sup>đ</sup>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Giảm giá</span>
                  <span className="font-semibold">
                    0<sup>đ</sup>
                  </span>
                </div>
              </div>
              <hr />
              {/* Tổng tiền */}
              <div className="flex justify-between items-center p-3 text-xl">
                <span>Tổng tiền</span>
                <span className="font-semibold text-2xl">
                  219,000<sup>đ</sup>
                </span>
              </div>
            </div>
            {/* Nút mua hàng */}
            <Link to="/Payment" state={{ listProduct: data }}>
              <button className="w-full bg-red-500 hover:opacity-80 rounded p-2 text-white">
                Mua hàng{" ("}
                {data.length}
                {")"}
              </button>
            </Link>
          </div>
        </div>
        {/* Gợi ý cho khách hàng */}
        <div className="bg-white">
          <div className="text-2xl font-semibold p-3">Có thể bạn quan tâm</div>
          <hr />
          {/* Danh sách quan tâm */}
          <div className="w-full box-border flex flex-row justify-between gap-10 overflow-hidden p-5">
            {BestSelling &&
              BestSelling.map((item) => {
                return (
                  <div className="min-w-[200px] flex flex-col gap-1 p-2 hover:shadow-xl hover:cursor-pointer">
                    <Link
                      to={`/Product/Detail/${item.id}`}
                      state={{ Product: item }}
                    >
                      <div className="hover:cursor-pointer">
                        {/* Ảnh sản phẩm */}
                        <div className="flex justify-start items-center h-44">
                          <img
                            className="shadow-lg h-full"
                            src={item.thumbnailUrl}
                            alt={item.title}
                          />
                        </div>
                        {/* Tiêu đề và thông tin sản phẩm */}
                        <Tooltip
                          title={item.title}
                          color={"black"}
                          arrowPointAtCenter={true}
                          placement="left"
                        >
                          <div className="text-lg font-bold h-14 line-clamp-2">
                            {item.title}
                          </div>
                        </Tooltip>
                        <Space className="mb-2">
                          <Rate disabled allowHalf="true" defaultValue={4.5} />
                        </Space>
                        <div className="text-sm line-clamp-1">
                          {"Tác giả: "}
                          {item.authors &&
                            item.authors.map((author) => {
                              return (
                                <span>
                                  {author}
                                  {author ===
                                  item.authors[item.authors.length - 1]
                                    ? ""
                                    : ", "}
                                </span>
                              );
                            })}
                        </div>
                        <div className="text-sm line-clamp-1">
                          {"Quốc gia: " + item.country}
                        </div>
                        <div className="text-sm line-clamp-1">
                          {"Ngôn ngữ: " + item.language}
                        </div>
                        <div className="line-clamp-1 font-semibold text-lg">
                          {"Giá bán: " +
                            item.price
                              .toString()
                              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                          <sup>đ</sup>
                        </div>
                      </div>
                    </Link>
                    <button className="font-bold bg-green-700 text-white rounded-md py-2 whitespace-nowrap flex justify-center hover:opacity-80">
                      <BsCartPlus className="text-white text-2xl" />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
