import React from "react";

const CreateInput = (props) => {    
    
    let newDisplay = props.display;
    let text = (newDisplay && 
    <>
        <div>Número de páginas: 
            <input type='button' name='pages' value='-' onClick={props.numberInput}/> 
            <input type='number' pattern="[1-999]{1,999}" name='pages' value={props.pages} onChange={props.numberInput}/>
            <input type='button' name='pages' value='+' onClick={props.numberInput}/>
        </div>
        <div>Número de idiomas: 
            <input type='button' name='languages' value='-' onClick={props.numberInput}/> 
            <input type='number' name='languages' value={props.languages} onChange={props.numberInput}/>
            <input type='button' name='languages' value='+' onClick={props.numberInput}/>
        </div>
    </>
    )
    return text;
}

export default CreateInput;