import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {
    user,
    setUser,
    navigate,
    setShowUserLogin,
    searchQuery,
    setSearchQuery,
    getCartCount,
    products,
  } = useAppContext();

  const logout = async () => {
    setUser(null);
  };

  useEffect(() => {
    searchQuery.length > 0 && navigate("/products");
  }, [searchQuery]);

  return (
    <nav className=" border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-16 lg:px-20 xl:px-32 py-4 bg-white relative transition-all">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src={assets.logo} alt="logo" />
        </NavLink>
        <button
        onClick={()=>navigate('/seller')}
         className="mx-2 text-[12px] md:text-xs text-primary/80 border border-primary/60 rounded-full px-2 py-1 hover:bg-primary-dull/10 font-medium cursor-pointer transition-all">
          Seller Dashboard
        </button>
        <div className="hidden sm:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all 
             ${isActive ? "text-primary" : "hover:text-primary/60"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition-all 
             ${isActive ? "text-primary" : "hover:text-primary/60"}`
            }
          >
            All Products
          </NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none  placeholder-gray-500 "
              type="text"
              placeholder="Search products"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="cursor-pointer"
            />
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img src={assets.nav_cart_icon} alt="cart" />
            {getCartCount() > 0 && (
              <button
                className="absolute -top-2 -right-3 text-xs text-white
           bg-primary w-[18px] h-[18px] cursor-pointer rounded-full"
              >
                {getCartCount()}
              </button>
            )}
          </div>

          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary
              hover:bg-primary-dull transition text-white rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile_icon"
                className="w-10 cursor-pointer"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 w-30 py-2 rounded-md text-sm z-40">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="cursor-pointer p-1.5 pl-3 hover:bg-primary/10"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="cursor-pointer p-1.5 pl-3 hover:bg-primary/10"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center gap-6 sm:hidden">
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="cursor-pointer"
            />
            {getCartCount() > 0 && (
              <button
                className="absolute -top-2 -right-3 text-xs text-white
           bg-primary w-[18px] h-[18px] rounded-full"
              >
                {getCartCount()}
              </button>
            )}
          </div>
          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
          >
            <img src={assets.menu_icon} alt="menu" className="cursor-pointer" />
          </button>
        </div>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full z-50 bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition-all w-full hover:bg-primary/60 px-2 rounded ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `transition-all w-full hover:bg-primary/60 px-2 rounded ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            All Products
          </NavLink>

          {user && (
            <NavLink
              to="/my-orders"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              My Orders
            </NavLink>
          )}

          {!user ? (
            <button
              onClick={() => {
                setShowUserLogin(true);
                setOpen(false);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-8 py-2 bg-primary
       hover:bg-primary-dull transition text-white rounded-full"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
