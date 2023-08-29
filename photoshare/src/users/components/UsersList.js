import React from "react";
import "./UsersList.css"
import Usersitems from "./Usersitems";
const UsersList=(props)=>{
    return(
        <ul className="userlist">
            {props.items.map(user=>{
                return <Usersitems 
                key={user.id}
                id={user.id}
                name={user.name}
                pic={user.pic}
                locationcount={user.numberoflocation}/>
})}
        </ul>
    )
};

export default UsersList;