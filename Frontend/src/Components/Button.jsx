import React from "react";

const Button = ({ bgColor, text, textColor, hoverBg }) => {
  console.log(hoverBg);

  return (
    <button
      className={`py-2.5 px-7 bg-${bgColor} rounded-md transition-all duration-300 hover:${hoverBg}`}
    >
      {text}
    </button>
  );
};

export default Button;
