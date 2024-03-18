import React from "react";

const Button = ({ onClick, value }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      onClick={handleClick}
      className={`${value === "Del" ? "bg-red-400" : "bg-gray-800"}  ${
        value === "Del" ? "col-span-2" : ""
      }
        cursor-pointer rounded transition-all duration-200 transform hover:scale-95`}
    >
      {value}
    </button>
  );
};

export default Button;
