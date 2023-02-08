import React from "react";
import "./components/style/footer.css";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="grid grid-cols-4 gap-20 border-t px-10 pt-10 w-fit">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-semibold">HỖ TRỢ KHÁCH HÀNG</h1>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="/">Tình trạng đặt hàng</a>
            </li>
            <li>
              <a href="/">Vận chuyển đơn hàng</a>
            </li>
            <li>
              <a href="/">Chính sách hoàn trả</a>
            </li>
            <li>
              <a href="/">Phương thức thanh toán</a>
            </li>
            <li>
              <a href="/">Trung tâm hỗ trợ</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-semibold">CỬA HÀNG</h1>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="/">Công ty liên doanh</a>
            </li>
            <li>
              <a href="/">Phiếu quà tặng</a>
            </li>
            <li>
              <a href="/">Ưu đãi và giảm giá</a>
            </li>
            <li>
              <a href="/">Đánh giá của khách hàng</a>
            </li>
            <li>
              <a href="/">Danh sách các cửa hàng</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-semibold">QUY ĐỊNH</h1>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="/">Khiếu nại</a>
            </li>
            <li>
              <a href="/">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="/">Điều khoản và điều kiện</a>
            </li>
            <li>
              <a href="/">Chính sách Cookies</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-5">
            <div className="font-semibold ">NHẬN ƯU ĐÃI CỦA CHÚNG TÔI</div>
            <div className="font-light flex min-w-[200px]">
              <input
                className="p-2 border-2 box-border inline-block w-3/5 focus:placeholder-transparent outline-none rounded"
                type="text"
                placeholder="Nhập email của bạn..."
              />
              <button
                className="bg-green-700 text-white p-2 box-border inline-block hover:bg-green-800 rounded"
                type="submit"
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-semibold">KẾT NỐI VỚI CHÚNG TÔI</h1>
            <div className="flex gap-5 items-center">
              <a href="https://www.facebook.com">
                <svg
                  className="w-10 h-10 text-blue-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com">
                <svg
                  className="w-10 h-10 text-pink-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/vi-VN">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="w-10 h-10 text-[#6a76ac]"
                >
                  <path
                    fill="currentColor"
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  />
                </svg>
              </a>
              <a href="https://web.telegram.org/k/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  class="w-10 h-10 text-[#0088cc]"
                >
                  <path
                    fill="currentColor"
                    d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-sm">
        <a href="/">Điều khoản</a>
        <span>|</span>
        <a href="/">Quyền riêng tư</a>
        <span>|</span>
        <a href="/">Q&A</a>
        <span>|</span>
        <a href="/">Bản quyền</a>
        <span>|</span>
        <a href="/">Pháp lý</a>
        <span>|</span>
        <a href="/">&copy; 2020</a>
      </div>
    </div>
  );
};
