import React, { useState } from "react";
import "./NewLocations.css"
const NewLocations = () => {
    const [newlocations, setNewlocation] = useState({
        title: "",
        desc: "",
        address: "",
    });
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("new location page:", newlocations)
    };
    const changeHandler = (event) => {
        const newValue = event.target.value;
        const inputname = event.target.name;

        setNewlocation(previousvalue => {
            if (inputname === "newlocationtitle") {
                return {
                    title: newValue,
                    desc: previousvalue.desc,
                    address: previousvalue.address
                }
            }
            if (inputname === "newlocationdesc") {
                return {
                    title: previousvalue.title,
                    desc: newValue,
                    address: previousvalue.address
                }
            }
            if (inputname === "newlocationaddr") {
                return {
                    title: previousvalue.title,
                    desc: previousvalue.desc,
                    address: newValue
                }
            }

        }
        )
    };
    return (
        <form className="location-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label>
                    Title
                    <input name="newlocationtitle" type="text" required onChange={changeHandler} />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Description
                    <textarea name="newlocationdesc" rows="3" required onChange={changeHandler} />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Address
                    <input name="newlocationaddr" type="text" required onChange={changeHandler} />
                </label>
            </div>
            <div className="form-control">
                <button>Submit</button>
            </div>

        </form>
    );
};


export default NewLocations;