import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { InputFiled } from "../../shared/InputFiled";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const SellerLogin = () => {
  const [email, setEmail] = useState("text@gmail.com");
  const [password, setPassword] = useState("123");
  const { navigate, isSeller, setIsSeller } = useAppContext();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSeller(true);
  };

  useEffect(() => {
    isSeller && navigate("/seller");
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex flex-col items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            Seller <span className="text-primary">Login</span>
          </p>
          <div className="w-full ">
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <div className="w-full ">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <button
            className="bg-primary text-white w-full py-2 rounded-md
           cursor-pointer"
          >
            Login
          </button>
          <div>

          <NavLink
            to={"/"}
            className="group cursor-pointer flex items-center justify-center gap-1 text-primary font-medium text-xs w-full"
            >
            <img
              src={assets.arrow_right_icon_colored}
              alt="arrow"
              className="group-hover:-translate-x-1 transition-all"
              />
            Shopping Dashboard
          </NavLink>
              </div>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
