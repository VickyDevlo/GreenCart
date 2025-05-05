import React from "react";
import { useAppContext } from "../../context/appContext";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";

export const SellerLayout = () => {
  const { setIsSeller } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    setIsSeller(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/seller">
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer w-34 md:w-38"
          />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border bg-primary text-white border-primary rounded-full cursor-pointer text-sm px-4 py-1 hover:bg-primary-dull transition-all"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-52 w-16 border-r h-[95vh] text-base border-gray-300 flex flex-col gap-1.5">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                      ${
                        isActive
                          ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                          : "hover:bg-gray-100/90 border-white text-gray-700"
                      }`}
            >
              <img src={item.icon} className="w-7 h-7" />
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};
