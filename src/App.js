import React from "react";
import Notes from "./components/Notes";
import TextField from "./components/TextField";
import { data } from "./mockupData/mockupData";

function App() {
  // State initialize
  const [notes, setNotes] = React.useState(data);
  const [isEditable, setEditable] = React.useState(false);
  const [idxEdit, setIdxEdit] = React.useState()

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    })
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, idx) => {
        return idx !== index;
      })
    })
  };

  const editNote = (index, toEditNote) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note, idx) => {
        if (idx === index) {
          return {
            ...note,
            ...toEditNote
          }
        }
        return note;
      });
    });
  };

  const editIndex = (index) => {
    setIdxEdit(index)
  };

  return (
    <div className="App" style={{
                                backgroundColor: "whitesmoke",
                                position: "relative",
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignContent: "flex-start",
                                margin: 20,
                                padding: 20,
                                height: "90vh",
                                borderRadius: 15,
                                boxShadow: "1px 1px 15px rgba(0,0,0,0.3)"}}>
      {
        notes.map((note, index) => (
          <Notes  key={note + "-" + index}
                  idx={index} title={note.title} 
                  content={note.content} 
                  deleteNote={deleteNote} 
                  editNote={editNote} 
                  isEditable={isEditable} 
                  setEditable={setEditable}
                  editIndex={editIndex}
                  idxEdit={idxEdit}
                  />
        ))
      }
      <TextField addNote={addNote} />
    </div>
  );
}

export default App;
