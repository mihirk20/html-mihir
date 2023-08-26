import React from "react";
import "./todolist.css"

const TodoList = (props) => {
    console.log(props)
    return (<ul className="todolist" type="none">

        {/* <li>{props.list[0].itemname}</li>
        <li>{props.list[0].itemname}</li>
        <li>{props.list[0].itemname}</li> */}


        {props.list.map((listitem) => {
            return <li key={listitem.itemid}>{listitem.itemname}</li>
        })}
    </ul>
    );
};

export default TodoList;