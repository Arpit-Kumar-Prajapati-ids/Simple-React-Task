import React from 'react';
import "./topsection.css";
import { useNavigate } from 'react-router-dom';
const TopSection = (props) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
    }
return(
    <div className="topsectioncontainer">
        <div className="greetings">
            <p>Hello, {props.username}</p>
        </div>
        <div className="btns">
            <button>Add New Project</button>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    </div>
)
}


export default TopSection;