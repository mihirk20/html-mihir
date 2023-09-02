import React, { useContext, useState } from "react";
import "./Login.css";
import { LoginContext } from "../../common/components/context";
const Login = () => {
    const loggedin=useContext(LoginContext)
    const [newlogin, setnewlogin] = useState({
        email: "",
        password: ""
    });
    const submitHandler = (event) => {
        event.preventDefault();
        loggedin.login();
        console.log("credentials:", newlogin);
    };
    const changeHandler = (event) => {
        const inputname = event.target.name;
        const newValue = event.target.value;

        setnewlogin(previousValue => {
            if (inputname === "newloginemail") {
                return {
                    email: newValue,
                    password: previousValue.password
                }
            }
            if (inputname === "newloginpassword") {
                return {
                    email: previousValue.email,
                    password: newValue
                }
            }
        })
    }

    return (
        <form className="login-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label>
                    Email
                    <input name="newloginemail"
                        type="email"
                        required
                        onChange={changeHandler} />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Password
                    <input name="newloginpassword"
                        type="password"
                        required
                        onChange={changeHandler} />
                </label>
            </div>
            <div className="form-control">
                <button>Submit</button>
            </div>
        </form>
    )

}
export default Login;