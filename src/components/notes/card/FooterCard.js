import React from "react";

const FooterCard = () => {
  return (
    <div className="w-full flex flex-wrap flex-auto items-end">
      <button className="w-6/12 text-xs bg-red-400 hover:bg-red-500 text-white p-2 transition ease-in max-h-8">
        Hapus
      </button>
      <button className="w-6/12 text-xs bg-yellow-400 hover:bg-yellow-500 text-white p-2 transition ease-in max-h-8">
        Arsip
      </button>
    </div>
  );
};

export default React.memo(FooterCard);
