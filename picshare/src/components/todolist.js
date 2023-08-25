import React from "react";
import "./todolist.css"

const TodoList = (props) => {
    console.log(props)
    return (<ul className="todolist">

        <li>{props.list[0].itemname}</li>
        <li>{props.list[0].itemname}</li>
        <li>{props.list[0].itemname}</li>

    </ul>
    );
};

export default TodoList;