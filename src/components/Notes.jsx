import React from "react";

export default function Notes({idx, title, content, deleteNote, editNote, isEditable, setEditable, editIndex, idxEdit}) {

    const handleOnDelete = () => {
        deleteNote(idx);
    };

    const handleEditableMode = () => {
        setEditable(!isEditable);
        editIndex(idx);
    };


    const handleEditNote = (e) => {
        const innerText = e.currentTarget.innerText;
        const name = e.currentTarget[Object.keys(e.currentTarget)[1]].name
        editNote(idx, {[name]: innerText});
    };

    const isEditing = isEditable && idx === idxEdit


    return (
        <div className="Notes" id={idx} style={{
                                    backgroundColor: "#ffef96",
                                    borderColor: "gray",
                                    borderWidth: 10,
                                    position: "relative",
                                    width: 200,
                                    height: 200,
                                    padding: 20,
                                    margin: 5,
                                    borderRadius: 15,
                                    boxShadow: `${isEditing ? 10: 1}px ${isEditing ? 10: 1}px ${isEditing ? 15: 5}px rgba(0,0,0,0.3)`,
                                    marginLeft: `${isEditing ? -10: 0}px`,
                                    marginTop: `${isEditing ? -10: 0}px`}}>

            <h2 contentEditable={isEditable} name="title" onInput={handleEditNote} style={{fontSize: 20}}>{title}</h2>
            <p contentEditable={isEditable} name="content" onInput={handleEditNote} style={{fontSize: 15}}>{content}</p>

            <button onClick={handleEditableMode} style={{
                            position: "absolute",
                            bottom: 10,
                            right: 70,
                            borderRadius: 8,
                            borderWidth: 1,
                            padding: 6
                            }}>Edit</button>
            <button onClick={handleOnDelete} style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        borderRadius: 8,
                        borderWidth: 1,
                        padding: 6
                        }}>Delete</button>
        </div>
    )
}