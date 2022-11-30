import React from "react";

const Button = ({ color, icon, ...rest }) => {
  return (
    <button
      className={`btn px-4 py-2 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center ${color}`}
      type="button"
      id="button-addon2"
      // onClick={onClick}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default Button;
