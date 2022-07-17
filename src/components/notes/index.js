import React from "react";
import ContainerNotes from "./ContainerNotes";
import Card from "./card";

const index = ({ data, onDeleteHandler, onChangeStatusArchived }) => {
  return (
    <ContainerNotes>
      {data.map((item) => {
        return <Card key={item.id} data={item} onDeleteHandler={onDeleteHandler} onChangeStatusArchived={onChangeStatusArchived}/>;
      })}
    </ContainerNotes>
  );
};

export default React.memo(index);
