import React from "react";
import ContainerForm from "./ContainerForm";
import InputForm from "./InputForm";

const Form = ({title}) => {
  return (
    <ContainerForm>
      <h1 className="text-lg font-bold text-gray-500 mb-8">{title}</h1>
      <InputForm />
    </ContainerForm>
  );
};

export default React.memo(Form);
