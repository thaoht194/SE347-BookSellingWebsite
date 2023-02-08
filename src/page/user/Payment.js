import { Input, Radio, Space } from "antd";
import React, { useState } from "react";
import { RiCoupon2Line } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { AiTwotoneBank } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../../common/images/dinob_logo.png";

const Payment = () => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const location = useLocation();
  const { listProduct } = location.state;
  return (
    <div className="flex flex-col gap-8 bg-gray-100 min-h-screen">
      {/* Thanh tiêu đề trang thanh toán */}
      <div className="bg-white py-5 px-[100px] md:px-[300px] lg:px-[400px] flex justify-between items-center">
        <span className="text-2xl font-semibold text-green-600 flex gap-3 items-center">
          <Link to="/">
            <img className="text-sm text-gray-500 w-32" src={logo} alt="logo" />
          </Link>
          {"|"}
          <span>Thanh toán</span>
        </span>
        <a href="tel:0949757485">Support: 0949757485</a>
      </div>
      <div className="mx-[100px] md:mx-[300px] lg:mx-[400px] flex flex-wrap gap-5">
        {/* Chọn hình thức thanh toán */}
        <div className="grow min-w-min bg-white p-3 flex flex-col gap-10">
          <div className="text-xl font-semibold">Chọn hình thức thanh toán</div>
          <Radio.Group name="payment-group" defaultValue={1}>
            <Space size={40} direction="vertical">
              <Radio value={1}>
                <div className="text-lg flex gap-3 items-center">
                  <BsCashStack className="inline-block text-green-600 text-3xl" />
                  Thanh toán tiền mặt khi nhận hàng
                </div>
              </Radio>
              <Radio value={2}>
                <div className="text-lg flex gap-3 items-center">
                  <AiTwotoneBank className="inline-block text-blue-600 text-3xl" />
                  Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)
                </div>
              </Radio>
              <Radio value={3}>
                <div className="text-lg flex gap-3 items-center">
                  <img
                    src="https://developers.momo.vn/v3/img/logo.svg"
                    alt=""
                  />
                  Thanh toán bằng ví MoMo
                </div>
              </Radio>
              <Radio value={4}>
                <div className="text-lg flex gap-3 items-center">
                  <img
                    className="w-[40px]"
                    src="https://www.tiendauroi.com/wp-content/uploads/2020/02/zalopay.png"
                    alt=""
                  />
                  Thanh toán bằng ví ZaloPay
                </div>
              </Radio>
              <Radio value={5}>
                <div className="text-lg flex gap-3 items-center">
                  <img
                    className="w-[40px]"
                    src="https://vnpay.vn/_nuxt/img/scan-to-pay.be02e1e.svg"
                    alt=""
                  />
                  <div>
                    Thanh toán bằng VNPAY <br />
                    <span className="text-gray-400 text-base">
                      Quét Mã QR từ ứng dụng ngân hàng
                    </span>
                  </div>
                </div>
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="max-w-[300px] grow flex flex-col gap-3">
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
          </div>
          <div className="bg-white flex flex-col gap-2">
            {/* Thông tin đơn hàng */}
            <div className="px-3 pt-3 flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">Đơn hàng</span>
                <Link to="/Cart">
                  <span className="text-blue-500 hover:opacity-80 hover:cursor-pointer">
                    Chỉnh sửa
                  </span>
                </Link>
              </div>
              <div className="flex gap-2">
                {listProduct.length}
                {" sản phẩm."}
                <span
                  className="text-blue-500 hover:cursor-pointer"
                  hidden={isShowInfo}
                  onClick={() => {
                    setIsShowInfo(!isShowInfo);
                  }}
                >
                  Xem thông tin
                </span>
                <span
                  className="text-blue-500 hover:cursor-pointer"
                  hidden={!isShowInfo}
                  onClick={() => {
                    setIsShowInfo(!isShowInfo);
                  }}
                >
                  Thu gọn
                </span>
              </div>
            </div>
            <hr />
            {/* Thông tin chi tiết đơn hàng */}
            <div className="px-3" hidden={!isShowInfo}>
              {listProduct &&
                listProduct.map((product) => {
                  return (
                    <div className="flex justify-between">
                      <span className="flex gap-2">
                        {product.selectedCount}
                        {" x   "}
                        {product.title}
                      </span>
                      <span className="font-semibold">
                        {product.price
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                        <sup>đ</sup>
                      </span>
                    </div>
                  );
                })}
            </div>
            <hr hidden={!isShowInfo} />
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
              <div className="flex justify-between">
                <span>Phí vận chuyển</span>
                <span className="font-semibold">
                  21,000<sup>đ</sup>
                </span>
              </div>
            </div>
            <hr />
            {/* Tổng tiền */}
            <div className="flex justify-between items-center p-3 text-xl">
              <span>Tổng tiền</span>
              <span className="font-semibold text-2xl">
                240,000<sup>đ</sup>
              </span>
            </div>
          </div>
          {/* Nút mua hàng */}
          <button className="w-full bg-red-500 hover:opacity-80 rounded p-2 text-white">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
