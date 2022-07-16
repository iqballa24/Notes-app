import React from "react";
import ContainerNotes from "./ContainerNotes";
import Card from "./card";

const index = ({ data }) => {
  return (
    <ContainerNotes>
      {data.map((item) => {
        return <Card key={item.id} data={item}/>;
      })}
    </ContainerNotes>
  );
};

export default React.memo(index);
