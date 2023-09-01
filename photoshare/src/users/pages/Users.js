import React from "react";
import UsersList from "../components/UsersList";
const Users=()=>{

        const ALL_USERS=
        [
            {id:'u1',name:'xyz',pic:'https://picsum.photos/200',numberoflocation:2 ,},
            {id:'u2',name:'qwe',pic:'https://picsum.photos/200',numberoflocation:1 ,}

        ];
       return <UsersList items ={ALL_USERS}/>
};


export default Users;