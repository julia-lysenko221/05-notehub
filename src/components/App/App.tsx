import { useState, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import css from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";
import Pagination from "../Pagination/Pagination";

export default function App() {
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {<SearchBox />}
        {<Pagination />}
        {<button className={css.button}>Create note +</button>}
      </header>

      <NoteList />
      <NoteForm />
      <Modal />
    </div>
  );
}
