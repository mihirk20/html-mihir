import { createContext } from "react";

export const LoginContext=createContext({
    isloggedin:false,
    login:()=>{},
    logout:()=>{}
});