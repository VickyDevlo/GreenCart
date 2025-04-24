import React, { useState } from "react";
import { assets } from "../assets/assets";
import { InputFiled } from "../shared/InputFiled";

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500 max-lg:text-center">
        Add Shipping <span className="text-primary font-semibold">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between  md:mt-10">
        <div className="flex-1 w-full">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputFiled
                handleChange={handleChange}
                address={address}
                name={"firstName"}
                type={"text"}
                placeholder={"First Name"}
              />

              <InputFiled
                handleChange={handleChange}
                address={address}
                name={"lastName"}
                type={"text"}
                placeholder={"Last Name"}
              />
            </div>
            <InputFiled
              handleChange={handleChange}
              address={address}
              name={"email"}
              type={"email"}
              placeholder={"Email"}
            />
            <InputFiled
              handleChange={handleChange}
              address={address}
              name={"street"}
              type={"text"}
              placeholder={"Street"}
            />

            <div className="grid grid-cols-2 gap-4">
              <InputFiled
                handleChange={handleChange}
                address={address}
                name={"city"}
                type={"text"}
                placeholder={"City"}
              />
              <InputFiled
                handleChange={handleChange}
                address={address}
                name={"state"}
                type={"text"}
                placeholder={"State"}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputFiled
                handleChange={handleChange}
                address={address}
                name={"zipcode"}
                type={"number"}
                placeholder={"Zip code"}
              />
              <InputFiled
                handleChange={handleChange}
                address={address}
                name={"country"}
                type={"text"}
                placeholder={"Country"}
              />
            </div>
            <InputFiled
              handleChange={handleChange}
              address={address}
              name={"phone"}
              type={"text"}
              placeholder={"Phone"}
            />
            <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
              save address
            </button>
          </form>
        </div>
        <img
          src={assets.add_address_iamge}
          alt="address"
          className="hidden lg:block ml-18 w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default AddAddress;
