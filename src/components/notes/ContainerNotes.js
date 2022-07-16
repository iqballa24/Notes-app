import React from "react";

const ContainerNotes = (props) => {
  return (
    <div className="flex flex-wrap w-full max-h-[560px] overflow-auto list-notes">
      {props.children}
    </div>
  );
};

export default React.memo(ContainerNotes);
