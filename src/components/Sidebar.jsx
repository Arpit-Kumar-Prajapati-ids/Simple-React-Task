import React, { useEffect } from 'react';
import "./sidebar.css";

const Sidebar = (props) => {
    const {fName,lName,mail,img} = props.userDetails;
   
    return(
        <div className="sidebarcontainer">
            <div className="sidebarheading">
                <p>Dashboard</p>
            </div>
            <div className="userdetails">
                <div className="image">
                    <img src={img} alt='profilepic'/>
                </div>
                <p id="fullname">{fName} {lName}</p>
                <p id="mail">{mail}</p>
            </div>
            <div className="links">
                <p id="main">Dashboard</p>
                <p>Analytics</p>
                <p>Task List</p>
                <p>Tracking</p>
                <p>Setting</p>
            </div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
        <path fill="#08BDBA" d="M34,-43.4C47.2,-44.5,63.2,-40.3,67.6,-30.8C72,-21.4,64.9,-6.5,61.9,8.4C58.9,23.2,60.1,38.2,52.4,43.2C44.7,48.3,28,43.4,15.7,41.4C3.5,39.5,-4.3,40.4,-18.7,44.8C-33,49.2,-54,57,-60.3,51.4C-66.7,45.7,-58.5,26.5,-57,10.6C-55.5,-5.2,-60.7,-17.7,-60.4,-31.4C-60,-45.1,-54.1,-60,-43.1,-60C-32.1,-59.9,-16.1,-44.9,-2.8,-40.5C10.4,-36.1,20.8,-42.4,34,-43.4Z" transform="translate(100 100)" />
</svg>
        </div>
    )
}

export default Sidebar;