import React from 'react';
import './Person.css';
import Radium from 'radium';


const person = (props) => {
    const widthStyle = {
        "@media (min-width: 500px)": {
            width: "450px"
        }
    }

    return (
        <div className="Person" style={widthStyle}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}/>
        </div>
    );
}

export default Radium(person);