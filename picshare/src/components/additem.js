import React from "react";
import "./additem.css"

const Additem = (props) => {
    let entry = "";
    const submitHandler = (event) => {
        event.preventDefault();
        const Newitem = { itemid: Math.trunc(Math.random() * 100 + 1), itemname: entry }
        props.onAdditem(Newitem);
    };
    const entryHandler = (event) => {
        entry = event.target.value;
    };
    return (
        <form className="form" onSubmit={submitHandler}>
            <input type="text" onChange={entryHandler} />
            <button type="submit">Add</button>
        </form>
    );
};

export default Additem;