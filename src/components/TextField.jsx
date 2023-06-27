import React from "react";

export default function TextField({addNote}) {
    const [value, setValue] = React.useState({
        title: "",
        content: ""
    });
    const handleOnClick = (event) => {
        event.preventDefault();
        addNote({
            title: value.title,
            content: value.content
        });
        setValue({
            title: "",
            content: ""
        });
    };

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setValue((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    };

    return (
        <div className="TextField" style={{
                                        position: "fixed",
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        alignItems: "flex-end",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        left: 0,
                                        bottom: 50}}>

            <p style={{fontSize: 15, height: 10}}>Title: </p>
            <input name="title" value={value.title} type="text" onChange={handleOnChange} style={{
                                        position: "relative",
                                        width: "5%",
                                        height: 10,
                                        marginLeft: 10,
                                        padding: 8,
                                        borderRadius: 8,
                                        boxShadow: "1px 1px 5px rgba(0,0,0,0.2)"}} />

            <p style={{fontSize: 15, marginLeft: 10, height: 10}}>Content: </p>
            <input name="content" value={value.content} type="text" onChange={handleOnChange} style={{
                                        position: "relative",
                                        width: "15%",
                                        height: 10,
                                        marginLeft: 10,
                                        padding: 8,
                                        borderRadius: 8,
                                        boxShadow: "1px 1px 5px rgba(0,0,0,0.2)"}} />
            <button onClick={handleOnClick} style={{
                            position: "relative",
                            marginLeft: 10,
                            borderRadius: 8,
                            borderWidth: 1,
                            padding: 6
                            }}>Add</button>

        </div>
    )
}