import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Categories from "../components/categories/Categories";
import BestSeller from "../components/bestSeller/BestSeller";
import BottomBanner from "../components/bottomBanner/BottomBanner";
import NewsLetter from "../components/newsLetter/NewsLetter";

const Home = () => {
  return (
    <div className="mt-10 container mx-auto">
      <HomeBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
