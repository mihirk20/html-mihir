import React from "react";
import "./App.css"
import TodoList from "./components/todolist";


const App = () => {
    const listitems = [
        { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "hello1" },
        { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "hello2" },
        { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "hello3" },
    ];

    const name = "MERN";
    return (
        <div className="container">
            <h1>{name}'s todo list</h1>
            <TodoList list={listitems} />
        </div>
    )
};

export default App;