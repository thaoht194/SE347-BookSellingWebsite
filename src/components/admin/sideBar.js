import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
//import { Link } from "react-router-dom"

const SideBarList = [
  {
    name: "Dashboard",
    link: "/#",
    icon: "grid_view",
  },
  {
    name: "Orders",
    link: "/#",
    icon: "list_alt",
  },
  {
    name: "Customers",
    link: "/admin/users",
    icon: "person",
  },
  {
    name: "Products",
    link: "/admin/products",
    icon: "inventory",
  },
  {
    name: "Add Product",
    link: "/admin/addproduct",
    icon: "add",
  },
  {
    name: "Staff",
    link: "/admin/users/1",
    icon: "Group",
  },
  {
    name: "category",
    link: "/#",
    icon: "Category",
  },

  {
    name: "Document",
    link: "/#",
    icon: "Description",
  },
];

export const AdminSide = () => {
  const [site, setSite] = useState("");

  return (
    <>
      <aside className="w-[230px] " aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <div className="p-2"></div>
            {SideBarList.map((item) => {
              return (
                <>
                  <Link to={item.link}>
                    <div className="bg-red" onClick={() => setSite(item.name)}>
                      <a
                        href="/#"
                        className={` ${
                          site === item.name
                            ? "text-white bg-[#4B49AC]"
                            : `text-gray-500 hover:bg-[#c4c3f0] hover:text-gray-800` 
                        }  text-sm flex flex-row justify-between items-center py-2 pl-4 pr-4    font-semibold  rounded-lg dark:text-white bg-white `}
                      >
                        <div className=" flex flex-row gap-4 justify-between items-center">
                          <span class="material-symbols-outlined">
                            {item.icon}
                          </span>
                          <span className="min-w-[100px]"> {item.name}</span>
                        </div>

                        <span class="material-symbols-outlined">
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </span>
                      </a>
                    </div>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};
