import React, { useState, useEffect } from "react";

const FooterCard = ({ id, onDeleteHandler, onChangeStatusArchived, archived }) => {
  const [isArchived, setIsArvhived] = useState(archived);

  useEffect(() => {
    setIsArvhived(!archived)
  }, [archived])

  return (
    <div className="w-full flex flex-wrap flex-auto items-end">
      <button
        onClick={() => onDeleteHandler(id)}
        className="w-6/12 text-xs bg-red-400 hover:bg-red-500 text-white p-2 transition ease-in max-h-8"
      >
        Hapus
      </button>
      <button
        onClick={() => onChangeStatusArchived(id)}
        className="w-6/12 text-xs bg-yellow-400 hover:bg-yellow-500 text-white p-2 transition ease-in max-h-8"
      >
        {isArchived ? "Arsip" : "Pindahkan"}
      </button>
    </div>
  );
};

export default React.memo(FooterCard);
