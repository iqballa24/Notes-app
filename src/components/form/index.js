import React, { useState } from "react";
import ContainerForm from "./ContainerForm";
import Input from "../input";

const Form = ({ title, onAddHandler }) => {
  const [data, setData] = useState({ title: "", notes: "" });
  const MAX_LENGTH = 50;
  let REMAINING_CHARACKTER = MAX_LENGTH - data.title.length;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newNotes = {
      id: +new Date(),
      title: data.title,
      body: data.notes,
      createdAt: new Date().toISOString(),
    };
    onAddHandler(newNotes);
    setData((prevState) => {
      return { title: "", notes: "" };
    });
  };

  const onTitleChangeHandler = (e) => {
    setData((prevState) => {
      return { ...prevState, title: e.target.value.slice(0, MAX_LENGTH) };
    });
  };

  const onNotesChangeHandler = (e) => {
    setData((prevState) => {
      return { ...prevState, notes: e.target.value };
    });
  };

  const onResetHandler = () => {
    setData((prevState) => {
      return { title: "", notes: "" };
    });
  };

  return (
    <ContainerForm>
      <h1 className="text-lg font-bold text-gray-500 mb-8">{title}</h1>
      <form action="#" id="form" onSubmit={onSubmitHandler}>
        <Input
          title="title"
          typeInput="input"
          value={data.title}
          onChangeHandler={onTitleChangeHandler}
        />
        <p
          className={`text-right p-2 text-xs text-gray-500 ${
            REMAINING_CHARACKTER === 0 && "error-text"
          }`}
        >
          Remaining characters: {REMAINING_CHARACKTER}
        </p>
        <Input
          title="notes"
          typeInput="textarea"
          value={data.notes}
          onChangeHandler={onNotesChangeHandler}
        />
        <div className="flex flex-row mt-16 space-x-2">
          <button
            type="button"
            onClick={onResetHandler}
            className="w-6/12 bg-red-500 text-white rounded-md p-3 hover:bg-red-600 transition ease-in
        "
          >
            Reset
          </button>
          <button
            type="submit"
            className="w-6/12 bg-green-500 text-white rounded-md p-3 hover:bg-green-600 transition ease-in
        "
          >
            Submit
          </button>
        </div>
      </form>
    </ContainerForm>
  );
};

export default React.memo(Form);
