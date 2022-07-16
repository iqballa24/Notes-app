import React, { useState } from "react";
import Form from "../components/form";
import Search from "../components/search";
import Filter from "../components/filter";
import Notes from "../components/notes";
import { getInitialData } from "../utils";

const itemFilter = [
  {
    id: 1,
    value: "aktif",
    text: "aktif",
  },
  {
    id: 2,
    value: "arsip",
    text: "arsip",
  },
];

const NotesApp = () => {
  const [notes, setNotes] = useState(getInitialData());

  return (
    <div className="flex flex-wrap p-5 md:p-10">
      <div className="w-full md:w-5/12 mb-10 md:mb-0">
        <Form title="Add notes" />
      </div>
      <div className="w-full md:w-7/12 md:pl-10">
        <div className="flex flex-wrap mb-10">
          <div className="w-full sm:w-4/12 mb-5 sm:mb-0">
            <Filter selectOption={itemFilter} />
          </div>
          <div className="w-full sm:w-8/12 sm:pl-5">
            <Search />
          </div>
        </div>
        <Notes data={notes} />
      </div>
    </div>
  );
};

export default NotesApp;
