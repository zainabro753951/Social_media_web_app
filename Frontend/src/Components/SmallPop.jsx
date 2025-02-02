import React from "react";

const SmallPop = ({ icon, bgColor, textColor, text }) => {
  return (
    <div
      className={`flex items-center gap-2.5 py-2 px-7 bg-${bgColor} rounded-full text-${textColor}`}
    >
      <span className="text-xl">{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default SmallPop;
