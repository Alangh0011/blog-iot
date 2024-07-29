import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-gray-600 bg-blue-gradient rounded-[10px] outline-none hover:bg-white hover:text-gray-300 hover:scale-105 transform transition-all duration-300 ease-in-out ${styles}`}
  >
    Empieza Ahora
  </button>
);

export default Button;
