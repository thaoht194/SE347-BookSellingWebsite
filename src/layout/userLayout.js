import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Header } from "../components/user/header";
import { Footer } from "../components/user/footer";
import { AiOutlineUp } from "react-icons/ai";
import { useBackendVariable } from "../page/user/Backend/BackendVariable";

export const Layout = () => {
  const backendVariable = useBackendVariable();
  const [isBackToTop, setIsBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-[#f5f5f5] min-h-screen flex flex-col justify-between">
        <div className="relative">
          <div className="sticky top-0 z-20 shadow-md">
            <Header
              isLogged={backendVariable.isLogged}
              items={backendVariable.items}
            />
          </div>
          <div className="z-0">
            <Outlet></Outlet>
          </div>
          <div className="z-0 mt-10">
            <Footer />
          </div>
          {isBackToTop && (
            <button
              className="rounded-full p-2 text-xl md:p-3 md:text-3xl text-gray-500 bg-gray-300 opacity-60 fixed z-10 right-5 bottom-5 md:bottom-10 md:right-10"
              onClick={scrollTop}
            >
              <AiOutlineUp />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
