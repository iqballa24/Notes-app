import React from "react";

const BodyCard = ({ catatan }) => {
  return <div className="text-sm text-gray-500 pt-3 pb-8">{catatan}</div>;
};

export default React.memo(BodyCard);
