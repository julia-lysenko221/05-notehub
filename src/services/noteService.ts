import axios from "axios";
import type { Note, NewNoteData, FetchNotesResponse } from "../types/note";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = ""
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage };
  if (search.trim() !== "") {
    params.search = search.trim();
  }

  const res = await instance.get<FetchNotesResponse>("/notes", {
    params,
  });
  return res.data;
};
export const createNote = async (newNote: NewNoteData) => {
  const res = await instance.post<Note>("/notes", newNote);
  return res.data;
};

export const deleteNote = async (id: string) => {
  const res = await instance.delete(`/notes/${id}`);
  return res.data;
};
