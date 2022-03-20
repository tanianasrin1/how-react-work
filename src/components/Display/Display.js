import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: 'red solid 2px', margin: '10px'}}>
            <h2> Name: {props.name} </h2>
            <p>So far Steps: {props.steps} </p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;