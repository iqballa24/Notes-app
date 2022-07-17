import React, { useState, useEffect } from "react";
import Form from "../components/form";
import Search from "../components/search";
import Filter from "../components/filter";
import Notes from "../components/notes";
import { getInitialData, itemFilter } from "../utils";

const NotesApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [filter, setFilter] = useState(notes);
  const [selectedFilter, setSelectedFilter] = useState("semua");
  const [searchValue, setSearchValue] = useState("");

  const addDataHandler = (data) => {
    const listNotes = [...notes, data]
    setNotes((prevState) => {
      return [...prevState, data];
    });
    console.log(listNotes)
  };

  const deleteDataHandler = (id) => {
    const listNotes = notes.filter((note) => note.id !== id);
    setNotes(listNotes);
  };

  const changeStatusArchived = (id) => {
    const listNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(listNotes);
  };

  const onChangeFilter = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
  };

  const onKeyUpHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const searchData = (data, searchText) => {
    let result = data.filter((state) => {
      searchText = searchText.replace(new RegExp("\\\\", "g"), "\\\\");
      const regex = new RegExp(`^${searchText}`, "gim");
      return state.title.match(regex);
    });

    if (selectedFilter !== "aktif") {
      result.filter((state) => {
        return !state.archived;
      });
    }

    if (selectedFilter !== "arsip") {
      result.filter((state) => {
        return state.archived;
      });
    }

    return result;
  };

  const updateData = (data) => {
    let listNotes = [];
    const dataSearch = searchData(data, searchValue);

    if (selectedFilter === "aktif") {
      listNotes = dataSearch.filter((note) => !note.archived);
    } else if (selectedFilter === "arsip") {
      listNotes = dataSearch.filter((note) => note.archived);
    } else {
      listNotes = dataSearch;
    }
    setFilter(listNotes);
  };

  useEffect(() => {
    updateData(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, notes, searchValue]);

  return (
    <div className="flex flex-wrap p-5 md:p-10">
      <div className="w-full md:w-5/12 mb-10 md:mb-0">
        <Form title="Add notes" onAddHandler={addDataHandler}/>
      </div>
      <div className="w-full md:w-7/12 md:pl-10">
        <div className="flex flex-wrap mb-10">
          <div className="w-full sm:w-4/12 mb-5 sm:mb-0">
            <Filter selectOption={itemFilter} onChangeFilter={onChangeFilter} />
          </div>
          <div className="w-full sm:w-8/12 sm:pl-5">
            <Search onKeyUpHandler={onKeyUpHandler} />
          </div>
        </div>
        <Notes
          data={filter}
          onDeleteHandler={deleteDataHandler}
          onChangeStatusArchived={changeStatusArchived}
        />
        {filter.length === 0 && (
          <div className="text-center">
            <p>Data not found !</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesApp;
