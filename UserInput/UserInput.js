import React from 'react';


//子component
const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };
    
    return <input 
    type="text" 
    style={inputStyle}
    onChange={props.changed}
    value={props.currentName} />;
};

export default userInput;