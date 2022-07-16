import React from "react";

const HeaderCard = ({ title, date }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-bold text-gray-500">{title}</h1>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default React.memo(HeaderCard);
