import React from "react";
import {Link} from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css"
import NavLinks from "./NavLinks";
const MainNavigation=(props)=>{
    return (
        <MainHeader>
            <h1>
                <Link to ="/">PhotoShare</Link>
            </h1>
            <nav>
                <NavLinks/>
            </nav>
        </MainHeader>
    );
};

export default MainNavigation;