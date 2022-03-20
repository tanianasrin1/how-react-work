import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
  
   const increaseSteps = () =>{
       const newSteps = steps +1
      setSteps (newSteps)
   }

    return (
        <div style={{border: 'blue solid 2px', margin: '10px'}}>
            <h2>This is a Watch </h2>
            <h2>My current steps: {steps} </h2>
            <button onClick={increaseSteps}>Step count</button>
            <Display name='garmin' steps={steps} ></Display>
           
        </div>
    );
};

export default Watch;