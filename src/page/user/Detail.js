import React, { useState } from "react";
import BestSelling from "../../StaticData/DataFrontEnd/Home/BestSelling.json";
import { Link, useLocation, useParams } from "react-router-dom";
import { notification, Progress, Rate, Space, Tooltip } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  ShareAltOutlined,
  CopyOutlined,
  StarFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { BiRocket } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { FaShippingFast } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment";
import vi from "moment/locale/vi";
import DataRate from "../../StaticData/DataFrontEnd/Home/Rate.json";
import { useEffect } from "react";
import { useBackendVariable } from "./Backend/BackendVariable";

export const Detail = () => {
  const backendVariable = useBackendVariable();
  const { id } = useParams();
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.info({
      description: "Sao chép liên kết thành công.",
      placement: "top",
      duration: 1.5,
      icon: <TiTick className="text-white rounded-full p-1 bg-green-400" />,
    });
  };
  const { Product } = location.state;
  const desc = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className="text">
        {isReadMore ? text.slice(0, 500) + "..." : text}{" "}
        <span
          onClick={toggleReadMore}
          className="text-blue-500 hover:text-blue-600 hover:underline hover:cursor-pointer"
        >
          {isReadMore ? "Xem thêm" : "Ẩn bớt"}
        </span>
      </div>
    );
  };

  const [{ rate_5, rate_4, rate_3, rate_2, rate_1 }, setValue] = useState({});
  const [totalRate, setTotalRate] = useState(0);
  useEffect(() => {
    DataRate.forEach((element) => {
      if (element.id === Product.id) {
        setValue(element);
        setTotalRate(
          (
            (element.rate_1 +
              element.rate_2 * 2 +
              element.rate_3 * 3 +
              element.rate_4 * 4 +
              element.rate_5 * 5) /
            (element.rate_1 +
              element.rate_2 +
              element.rate_3 +
              element.rate_4 +
              element.rate_5)
          ).toFixed(1)
        );
        console.log("totalRate", totalRate);
      }
    });
  }, [DataRate, totalRate]);

  const handleAddItem = (element) => {
    backendVariable.items.every(function (item) {
      if (item.id === element.id) {
        item.user = item;
        openNotification(backendVariable.user.username);
        return false;
      } else return true;
    });
  };
  return (
    <>
      {contextHolder}
      <div className="flex flex-col gap-5 mt-5 px-[50px] md:px-[100px] lg:px-[200px]">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-14">
          {/* Thông tin tổng quan */}
          <div className="flex gap-4 md:gap-8 lg:gap-10 bg-white shadow-md p-2 grow">
            {/* Ảnh sản phẩm */}
            <div className="w-28 md:w-40 lg:w-60">
              <img
                className="w-full, h-fit"
                src={Product.thumbnailUrl}
                alt=""
              />
            </div>
            {/* Thông tin tổng quan sản phẩm */}
            <div className="flex flex-col gap-2 grow">
              <div className="text-md font-semibold text-gray-700 md:text-2-xl lg:text-3xl mb-5">
                {Product.title}
              </div>
              <Space className="text-sm">
                Đánh giá:{" "}
                <Rate
                  tooltips={desc}
                  disabled
                  allowHalf="true"
                  defaultValue={4.5}
                />
                (136 lượt đánh giá)
              </Space>
              {/* Tác giả */}
              <div className="text-sm">
                {"Bởi:"}
                {Product.authors.map((author, index) => {
                  return (
                    <span key={index}>
                      {" " + author}
                      {author === Product.authors[Product.authors.length - 1]
                        ? ""
                        : ","}
                    </span>
                  );
                })}
              </div>
              <div className="text-sm">{"Quốc gia: " + Product.country}</div>
              <div className="font-semibold">
                {"Loại bìa: " + Product.bookCover}
              </div>
              <div className="font-semibold">
                {"Số trang: " + Product.pageCount}
              </div>
              <Space className="font-semibold text-lg">
                Chia sẻ:
                <Tooltip
                  title="Twitter"
                  color={"black"}
                  arrowPointAtCenter={true}
                >
                  <TwitterShareButton url={window.location.href}>
                    <TwitterOutlined className="bg-green-400 text-white p-1 rounded-md hover:cursor-pointer" />
                  </TwitterShareButton>
                </Tooltip>
                <Tooltip
                  title="Facebook"
                  color={"black"}
                  arrowPointAtCenter={true}
                >
                  <FacebookShareButton url={window.location.href}>
                    <FacebookOutlined className="bg-green-400 text-white p-1 rounded-md hover:cursor-pointer" />
                  </FacebookShareButton>
                </Tooltip>
                <CopyToClipboard
                  text={window.location.href}
                  onCopy={() => openNotification()}
                >
                  <Tooltip
                    title="Sao chép liên kết"
                    color={"black"}
                    arrowPointAtCenter={true}
                  >
                    <CopyOutlined className="bg-green-400 text-white p-1 rounded-md hover:cursor-pointer" />
                  </Tooltip>
                </CopyToClipboard>
                <Tooltip
                  title="Nền tảng khác"
                  color={"black"}
                  arrowPointAtCenter={true}
                >
                  <ShareAltOutlined className="bg-green-400 text-white p-1 rounded-md hover:cursor-pointer" />
                </Tooltip>
              </Space>
            </div>
          </div>
          {/* Giá bán và các action */}
          <div className="rounded-md border border-gray-400 min-w-[300px] flex flex-col gap-2 p-5 shadow-md max-w-fit grow bg-white">
            <div className="text-xl font-semibold">
              {"Giá bán: " +
                Product.price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              <sup>đ</sup>
            </div>
            <div>
              {"Giá đề xuất: "}
              <span className="line-through text-gray-400">
                {Product.listPrice
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                <sup>đ</sup>
              </span>
            </div>
            <div className="font-semibold text-xl">
              {"Tiết kiệm: " +
                (parseFloat(Product.listPrice) - parseFloat(Product.price))
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              <sup>đ</sup>
              <span className="ml-3 text-green-700">
                {"(-" +
                  (
                    ((parseFloat(Product.listPrice) -
                      parseFloat(Product.price)) /
                      parseFloat(Product.listPrice)) *
                    100
                  ).toFixed(0) +
                  "%)"}
              </span>
            </div>
            <hr className="p-2" />
            <Space className="flex items-center">
              <BiRocket className="text-xl inline-block text-green-700" />
              <div>
                {"Miễn phí vận chuyển toàn quốc cho hóa đơn trên " + "300,000"}
                <sup>đ</sup>
              </div>
            </Space>
            <Space className="flex items-center">
              <FaShippingFast className="text-xl inline-block text-green-700" />
              Thời gian vận chuyển từ 3 - 5 ngày
            </Space>
            <hr className="p-2" />
            <div className="space-y-5">
              <div className="flex gap-5">
                <button
                  className="font-bold bg-green-700 text-white rounded-md p-2 whitespace-nowrap flex justify-center hover:opacity-80 grow"
                  onClick={() => {}}
                >
                  <BsCartPlus className="text-white text-2xl" />
                </button>
                <button className="font-bold bg-yellow-500 text-white rounded-md p-2 whitespace-nowrap flex justify-center hover:opacity-80 grow">
                  Mua ngay
                </button>
              </div>
              <button className="font-bold bg-pink-500 hover:opacity-80 text-white rounded-md p-2 whitespace-nowrap flex items-center justify-center gap-2 w-full">
                <HeartOutlined />
                Thêm vào danh sách yêu thích
              </button>
            </div>
          </div>
        </div>

        {/* Thông tin chi tiết sản phẩm */}
        <div className="bg-white p-3 flex flex-col gap-2 shadow-md">
          <div className="text-lg font-semibold">
            Thông tin chi tiết sản phẩm
          </div>
          <hr className="p-2" />
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-semibold">Số trang: </span>
                {Product.pageCount}
              </div>
              <div>
                <span className="font-semibold">Kích thước: </span>
                {Product.size}
              </div>
              <div>
                <span className="font-semibold">Ngày xuất bản: </span>
                {moment(Product.publishedDate)
                  .locale("vi", vi)
                  .format("DD, MMMM, YYYY")}
              </div>
              <div>
                <span className="font-semibold">Nhà xuất bản: </span>
                {Product.publisher}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-semibold">Quốc gia: </span>
                {Product.country}
              </div>
              <div>
                <span className="font-semibold">Ngôn ngữ: </span>
                {Product.language}
              </div>
              <div>
                <span className="font-semibold">Loại bìa: </span>
                {Product.bookCover}
              </div>
              <div>
                <span className="font-semibold">Số lượt bán ra: </span>
                {Product.sale
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </div>
          </div>
        </div>

        {/* Giới thiệu sản phẩm */}
        <div className="bg-white p-3 flex flex-col gap-2 shadow-md">
          <div className="text-lg font-semibold">Giới thiệu sản phẩm</div>
          <hr className="p-2" />
          <ReadMore>{Product.longDescription}</ReadMore>
        </div>

        {/* Danh mục đề xuất */}
        <div className="bg-white p-3 flex flex-col gap-2 shadow-md">
          <div className="text-2xl font-semibold">Sản phẩm tương tự</div>
          <hr className="p-2" />
          <div className="w-full box-border flex flex-row justify-between gap-10 overflow-hidden pb-1">
            {BestSelling &&
              BestSelling.map((item) => {
                return (
                  <div className="min-w-[200px] flex flex-col gap-1 p-2 hover:shadow-xl hover:cursor-pointer">
                    <div className="hover:cursor-default">
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
                        <div className="text-lg font-bold h-[60px] line-clamp-2">
                          {item.title}
                        </div>
                      </Tooltip>
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
                    <button className="font-bold bg-green-700 text-white rounded-md py-2 whitespace-nowrap flex justify-center hover:opacity-80">
                      <BsCartPlus className="text-white text-2xl" />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Xếp hạng đánh giá */}
        <div className="bg-white p-3 flex flex-col gap-2 shadow-md">
          <div className="text-lg font-semibold">Chi tiết đánh giá</div>
          <hr className="p-2" />
          <Space className="flex items-end">
            <Rate disabled value={totalRate} allowHalf="true" tooltips={desc} />
            {"(" + (rate_1 + rate_2 + rate_3 + rate_4 + rate_5) + "đánh giá)"}
          </Space>
          <div>{totalRate + " trên 5 sao"}</div>
          <div className="flex gap-3 items-center text-xl">
            5
            <StarFilled className="text-yellow-300 flex items-center" />
            <Progress
              className="mt-1 w-3/5"
              percent={Number(
                (
                  (rate_5 / (rate_1 + rate_2 + rate_3 + rate_4 + rate_5)) *
                  100
                ).toFixed(2)
              )}
              strokeColor="#FDE047"
              strokeWidth={"15px"}
            />
            <span className="text-base ml-5">{rate_5}</span>
          </div>
          <div className="flex gap-3 items-center text-xl">
            4
            <StarFilled className="text-yellow-300 flex items-center" />
            <Progress
              className="mt-1 w-3/5"
              percent={Number(
                (
                  (rate_4 / (rate_1 + rate_2 + rate_3 + rate_4 + rate_5)) *
                  100
                ).toFixed(2)
              )}
              strokeColor="#FDE047"
              strokeWidth={"15px"}
            />
            <span className="text-base ml-5">{rate_4}</span>
          </div>
          <div className="flex gap-3 items-center text-xl">
            3
            <StarFilled className="text-yellow-300 flex items-center" />
            <Progress
              className="mt-1 w-3/5"
              percent={Number(
                (
                  (rate_3 / (rate_1 + rate_2 + rate_3 + rate_4 + rate_5)) *
                  100
                ).toFixed(2)
              )}
              strokeColor="#FDE047"
              strokeWidth={"15px"}
            />
            <span className="text-base ml-5">{rate_3}</span>
          </div>
          <div className="flex gap-3 items-center text-xl">
            2
            <StarFilled className="text-yellow-300 flex items-center" />
            <Progress
              className="mt-1 w-3/5"
              percent={Number(
                (
                  (rate_2 / (rate_1 + rate_2 + rate_3 + rate_4 + rate_5)) *
                  100
                ).toFixed(2)
              )}
              strokeColor="#FDE047"
              strokeWidth={"15px"}
            />
            <span className="text-base ml-5">{rate_2}</span>
          </div>
          <div className="flex gap-3 items-center text-xl">
            1
            <StarFilled className="text-yellow-300 flex items-center" />
            <Progress
              className="mt-1 w-3/5"
              percent={Number(
                (
                  (rate_1 / (rate_1 + rate_2 + rate_3 + rate_4 + rate_5)) *
                  100
                ).toFixed(2)
              )}
              strokeColor="#FDE047"
              strokeWidth={"15px"}
            />
            <span className="text-base ml-5">{rate_1}</span>
          </div>
        </div>
      </div>
    </>
  );
};
