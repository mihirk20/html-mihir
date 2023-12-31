import React, { useState } from "react";
import "./App.css"
import TodoList from "./components/todolist";
import Additem from "./components/additem"


const App = () => {

    const [listitems, setListItems] = useState([
        // { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "HTML" },
        // { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "CSS" },
        // { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "BootStrap" },
    ]);
    const additemHandler = (Newitem) => {
        setListItems((previousList) => {
         return previousList.concat(Newitem);
        });
// listitems.push(Newitem);
// console.log(listitems);

    };
const name = "MERN";
return (
    <div className="section">
        <div className="text1">
            <p>One Place To Remember It All</p>
        </div>
        <div className="container">
            <h1>{name}'s Todo List</h1>
            <Additem onAdditem={additemHandler} />
            <TodoList list={listitems} />
        </div>
    </div>
)
};

export default App;