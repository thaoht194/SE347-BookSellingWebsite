import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

const Banner = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center relative">
      {/* Slider */}
      <Swiper
        className="w-full"
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <a href="/">
            <img
              src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img2.jpg?v=128"
              alt="Sách mới"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img
              src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img3.jpg?v=128"
              alt="Sách Nhã Nam"
            />
          </a>
        </SwiperSlide>
      </Swiper>
      <ul className="w-fit h-fit text-gray-600 text-center flex flex-row box-border bg-stone-200 opacity-80 absolute z-10 p-3 text-base font-bold gap-x-5 md:p-4 rounded-b-md">
        <li className="hover:cursor-pointer hover:opacity-100 hover:text-green-700">
          SẢN PHẨM ĐÃ XEM
        </li>
        <li className="hover:cursor-pointer hover:opacity-100 hover:text-green-700">
          SÁCH BÁN CHẠY
        </li>
        <li className="hover:cursor-pointer hover:opacity-100 hover:text-green-700">
          TẤT CẢ SẢN PHẨM
        </li>
        <li className="hover:cursor-pointer hover:opacity-100 hover:text-green-700">
          SÁCH MỚI PHÁT HÀNH
        </li>
      </ul>
    </div>
  );
};

export default Banner;
