import React from "react";

const index = ({ selectOption, onChangeFilter }) => {
  return (
    <div className="relative w-full shadow-md rounded-md transition ease-in-out">
      <select onChange={(e)=> onChangeFilter(e)}
        className="w-[90%] cursor-pointer rounded-md p-5
      "
        id="filterCathegory"
        name="filter-categhory"
      >
        <option value="semua">All</option>
        {selectOption.map((item) => (
          <option key={item.id} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(index);
