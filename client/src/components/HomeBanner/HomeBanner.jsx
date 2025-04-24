import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-5 md:pb-0 px-4 md:pl-16 lg:pl-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl opacity-65 font-bold text-center md:text-left max-w-[410px] leading-tight lg:leading-[4rem]">

          Freshness You Can Trust, Savings You will Love!
        </h1>
        <div className="flex items-center mt-6 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition-all group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow"
              className="transition-all group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
