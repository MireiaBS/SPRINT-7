import React from "react";

const CreateInput = (props) => {    
    
    let newDisplay = props.display;
    console.log('the display:', newDisplay)

    let text = (newDisplay && 'crear inputs')

    return text;
}

export default CreateInput;