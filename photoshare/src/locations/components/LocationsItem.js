import React from "react";

const Locationsitems=(props)=>{
    return(
        <li className="locationitem">
            <div className="locationitme-content">
                <div className="locationitem-pic">
                    <img src={props.pic} alt={props.title}/>
                </div>
                <div className="locationitem-infor">
                    <h2>{props.title}</h2>
                    <h3>{props.desc}</h3>
                    <h3>{props.address}</h3> 
               </div>
            </div>
        </li>
    )

}

export default Locationsitems;