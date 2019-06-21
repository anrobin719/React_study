import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <p>job : {props.job}</p>
            <p>value : {props.value}</p>
            <div className="mission">
                <p>mission</p>
                <p>{props.mission}</p>
                <input type="text" onChange={props.changed} ></input><br></br>
            </div>
            <input type="button" onClick={props.click} value="DELETE"></input>
        </div>
    );
}

export default Card;