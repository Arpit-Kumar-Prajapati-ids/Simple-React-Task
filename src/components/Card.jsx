import React from 'react';
import "./card.css";

const Card = (props) => {
    const {text,color} = props.cardDetails;
return(
    <div className="cardcontainer" style={{backgroundColor:color}}>
        <p>{text}</p>
    </div>
)
}


export default Card;