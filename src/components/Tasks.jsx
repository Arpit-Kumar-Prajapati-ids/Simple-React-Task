import React from 'react';
import "./tasks.css";

const Tasks = (props) => {
return(
    <div className="taskscontainer" style={{borderLeft:`5px solid ${props.color}`}}>
        <p id="maintask">{props.text}</p>
        <p id="taskdescription">{props.desc}</p>
    </div>
)
}


export default Tasks;