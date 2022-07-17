import React from "react";
import BodyCard from "./BodyCard";
import FooterCard from "./FooterCard";
import HeaderCard from "./HeaderCard";
import { showFormattedDate } from "../../../utils";

const index = ({ data, onDeleteHandler, onChangeStatusArchived }) => {
  return (
    <div className="relative flex flex-col w-full lg:w-6/12 xl:w-4/12 p-5 mb-3 items-stretch border rounded-md">
      <HeaderCard title={data.title} date={showFormattedDate(data.createdAt)} />
      <BodyCard catatan={data.body} />
      <FooterCard
        id={data.id}
        onDeleteHandler={onDeleteHandler}
        onChangeStatusArchived={onChangeStatusArchived}
        archived={data.archived}
      />
    </div>
  );
};

export default React.memo(index);
