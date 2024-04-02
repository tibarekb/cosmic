import React from "react";
import "../../styles/customer/add_customer.css"

function Add_Customer() {
    return (
        <div className="container">
           
            <div className="text">Primary Contact</div>
            
            <h3 className="header">Customer Name</h3>

            <div className="inputs">
            <div className="input">
                <img src="" alt="" />
                <input type="text" placeholder="Full Name"/>
            </div>

            <div className="input">
                <input type="email" placeholder="ex: cosmic@gmail.com"/>
            </div>

            <div className="input">
                <input type="text" placeholder="ex. +251 xxxxxxxx" />
            </div>

            <div className="input">
                <input type="text" placeholder="Street, SubCity, City Tin.no" />
            </div>

            <div className="button-container">
                <div className="cancel">Cancel</div>
                <div className="submit">Submit</div>
            </div>
            </div>
            </div>
    )
}

export default Add_Customer