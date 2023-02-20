import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZjJkNTRhNzQ2YzRlNWJkMThhMWZlIn0sImlhdCI6MTY3NjYxOTA5Mn0.pu39NbP2KrEIOqCoxGRGrhxwZ-X9fu71XiAyEFOHwBA",
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZjJkNTRhNzQ2YzRlNWJkMThhMWZlIn0sImlhdCI6MTY3NjYxOTA5Mn0.pu39NbP2KrEIOqCoxGRGrhxwZ-X9fu71XiAyEFOHwBA",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });
    const json = response.json();
    console.log("Adding a new note");
    const note = {
      _id: "63ef3e761756015ef2cc2748",
      user: "63ef2d54a746c4e5bd18a1fe",
      title: title,
      description: description,
      tag: tag,
      date: "1676623478588",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZjJkNTRhNzQ2YzRlNWJkMThhMWZlIn0sImlhdCI6MTY3NjYxOTA5Mn0.pu39NbP2KrEIOqCoxGRGrhxwZ-X9fu71XiAyEFOHwBA",
      },
    });
    const json = response.json();
    console.log("deleting a note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZjJkNTRhNzQ2YzRlNWJkMThhMWZlIn0sImlhdCI6MTY3NjYxOTA5Mn0.pu39NbP2KrEIOqCoxGRGrhxwZ-X9fu71XiAyEFOHwBA",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });
    const json = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
