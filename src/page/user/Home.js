import React from "react";
import Banner from "./components/Home/Banner";
import TopCategories from "../../StaticData/DataFrontEnd/Home/Banner.json";
import BestSelling from "../../StaticData/DataFrontEnd/Home/BestSelling.json";
import BestSellingTop from "../../StaticData/DataFrontEnd/Home/BestSellingTop.json";
import Authors from "../../StaticData/DataFrontEnd/Home/Author.json";
import Found from "../../StaticData/DataFrontEnd/Home/Found.json";
import "react-tooltip/dist/react-tooltip.css";
import { Rate, Segmented, Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { useBackendVariable } from "./Backend/BackendVariable";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Manipulation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/manipulation";

export const Home = (props) => {
  const backendVariable = useBackendVariable();
  const categoriesList = [
    {
      label: "Bán chạy nhất",
      value: 0,
    },
    {
      label: "Kỹ năng - Selfhelp",
      value: 1,
    },
    {
      label: "Kinh tế",
      value: 2,
    },
    {
      label: "Kinh điển",
      value: 3,
    },
    {
      label: "Trinh thám",
      value: 4,
    },
  ];
  return (
    <>
      {/* Banner ở đây*/}
      <Banner />

      {/* ---------------------------------------------------------------------- */}
      {/* Nội dung trang */}
      <div className="mt-10 my-10 w-full flex flex-col items-center box-border">
        <div className="lg:w-2/3 sm:w-5/6">
          {/* Danh mục sách*/}
          <div className="w-fit h-fit flex flex-row justify-center box-border">
            {TopCategories &&
              TopCategories.map((category) => {
                return (
                  <div className="box-border p-5 overflow-hidden">
                    <a href="/">
                      <img
                        className="transition transform delay-110 hover:scale-110 hover:cursor-pointer"
                        src={category.src}
                        alt={category.alt}
                      />
                    </a>
                  </div>
                );
              })}
          </div>

          {/* Tiêu đề */}
          <div className="text-gray-600 font-bold text-2xl text-center p-3 box-border">
            SÁCH MỚI PHÁT HÀNH
          </div>
          <div className="text-gray-600 text-center pb-3 font-light">
            Sách BookStore mới phát hành. Mời đọc giả chọn đọc.
          </div>

          {/* Danh mục sách mới phát hành */}
          <Swiper
            slidesPerView={10}
            loop={true}
            modules={[Navigation, A11y, Manipulation]}
            navigation
            Manipulation
          >
            {BestSelling &&
              BestSelling.map((item) => {
                return (
                  <SwiperSlide className="min-w-[200px] flex flex-col p-2 m-1 hover:shadow-xl hover:cursor-pointer rounded-md">
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
                  </SwiperSlide>
                );
              })}
          </Swiper>

          <div className="flex flex-col md:flex-row gap-10 mt-5">
            <div className="grid grid-rows-2 grow min-w-fit">
              <div className="auto-cols-min">
                {/* Tác giả nổi bật */}
                <div className="flex items-center font-semibold">
                  TÁC GIẢ NỔI BẬT
                </div>
                <div className="font-semibold text-gray-500 flex flex-col gap-2">
                  {/* Tác giả nổi bật */}
                  {Authors &&
                    Authors.map((item) => {
                      return (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <div className="flex items-center gap-5 mt-6 cursor-pointer">
                            <img
                              className="h-14 w-14 rounded-full border-2"
                              src={item.avatar}
                              alt={item.name}
                            />
                            <div className="inline-block hover:text-green-800">
                              {item.name}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                </div>
              </div>

              {/* Sản phẩm bán chạy nhất */}
              <div>
                <div className="flex items-center font-semibold mt-6">
                  SẢN PHẨM BÁN CHẠY NHẤT
                </div>
                <div className="flex flex-col">
                  {BestSellingTop &&
                    BestSellingTop.map((item) => {
                      return (
                        <div className="flex w-full gap-2 p-5 cursor-pointer hover:shadow-xl">
                          <img
                            className="max-h-[100px]"
                            src={item.thumbnailUrl}
                            alt=""
                          />
                          <div className="flex flex-col justify-between">
                            <div className="line-clamp-2 font-semibold">
                              {item.title}
                            </div>
                            <Space className="mb-2">
                              <Rate
                                className="text-lg"
                                disabled
                                allowHalf="true"
                                defaultValue={4.5}
                              />
                            </Space>
                            <div className="mb-2 text-green-700 font-semibold">
                              {item.price
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              <sup>đ</sup>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {/* ------------------------------------------- */}
            <div className="flex flex-col gap-5">
              {/* Navigation */}
              <div className="w-full box-border flex justify-end items-center text-gray-600  font-semibold">
                <div className="mr-auto">ĐƯỢC TÌM KIẾM NHIỀU NHẤT</div>
                <Segmented
                  size="large"
                  defaultValue={0}
                  options={categoriesList}
                  onChange={(value) => {
                    console.log("Value of category: ", value);
                  }}
                />
              </div>

              {/* Được tìm kiếm nhiều nhất */}
              <div className="grid gap-2 grid-cols-2">
                {Found &&
                  Found.map((item) => {
                    return (
                      <div className="w-full border flex gap-2 p-2 cursor-default hover:shadow-lg hover:cursor-pointer">
                        <img
                          className="min-w-[100px] h-[150px] md:h-[250px] md:min-w-[200px] "
                          src={item.thumbnailUrl}
                          alt=""
                        />
                        <div className="flex flex-col gap-2 p-2">
                          <Tooltip
                            title={item.title}
                            color={"black"}
                            arrowPointAtCenter={true}
                          >
                            <div className="font-semibold h-14 line-clamp-2 text-xl">
                              {item.title}
                            </div>
                          </Tooltip>
                          <div className="text-sm">
                            {"bởi:"}
                            {item.authors.map((author) => {
                              return (
                                <span>
                                  {" " + author}
                                  {author ===
                                  item.authors[item.authors.length - 1]
                                    ? ""
                                    : ","}
                                </span>
                              );
                            })}
                          </div>
                          <Space>
                            <Rate
                              disabled
                              allowHalf="true"
                              defaultValue={4.5}
                            />
                          </Space>
                          <div className="flex justify-end my-1">
                            <div className="mr-auto text-green-700 font-semibold text-lg">
                              {item.price
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              <sup>đ</sup>
                            </div>
                          </div>
                          <div className="line-clamp-3 text-sm">
                            {item.shortDescription}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
