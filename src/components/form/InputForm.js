import React from "react";
import Input from "../input";

const InputForm = () => {
  return (
    <form action="#" id="form">
      <Input title="judul" typeInput="input" />
      <Input title="catatan" typeInput="textarea" />
      <div className="flex flex-row mt-16 space-x-2">
        <button
          className="w-6/12 bg-red-500 text-white rounded-md p-3 hover:bg-red-600 transition ease-in
        "
        >
          Reset
        </button>
        <button
          className="w-6/12 bg-green-500 text-white rounded-md p-3 hover:bg-green-600 transition ease-in
        "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default React.memo(InputForm);
