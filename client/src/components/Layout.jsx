import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Login from "./login/Login";
import { useAppContext } from "../context/appContext";
import AllProducts from "../pages/AllProducts";
import ProductCategory from "../pages/ProductCategory";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import AddAddress from "../pages/AddAddress";
import MyOrders from "../pages/MyOrders";
import SellerLogin from "./seller/SellerLogin";
import { SellerLayout } from "../pages/seller/SellerLayout";
import AddProducts from "../pages/seller/AddProducts";
import Orders from "../pages/seller/Orders";
import ProductList from "../pages/seller/ProductList";

const Layout = () => {
  const isSellerPath = useLocation().pathname.includes("seller");

  const { isSeller, showUserLogin } = useAppContext();
  return (
    <div className="min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin && <Login />}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddProducts />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="orders" element={<Orders />} />
            <Route path="product-list" element={<ProductList />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default Layout;
