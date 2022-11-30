import React from "react";

const Button = ({ color, icon, onClick, ...rest }) => {
  return (
    <button
      className={`btn px-4 py-2 text-white font-medium text-lg leading-tight uppercase rounded shadow-md bg-${color}-600 hover:bg-${color}-700 focus:bg-${color}-700 active:bg-${color}-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center`}
      type="button"
      id="button-addon2"
      onClick={onClick}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default Button;
