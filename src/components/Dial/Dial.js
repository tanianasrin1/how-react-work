import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: 'black solid 2px', margin: '10px'}}>
            <h2> This is dail </h2>
            <p>So far steps: {props.steps} </p>
        </div>
    );
};

export default Dial;