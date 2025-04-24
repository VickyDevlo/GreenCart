import React from "react";

export const InputFiled = ({
  type,
  placeholder,
  name,
  handleChange,
  address,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      value={address[name]}
      required
      {...rest}
      className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition-all"
    />
  );
};
