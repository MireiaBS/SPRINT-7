import React from "react";

const CreateInput = (props) => {    
    
    let newDisplay = props.display;
    let text = (newDisplay && 
    <form>
        <div>Número de páginas: 
            <input type='button' name='pages' value='-' onClick={props.numberInput}/> 
            <input type='text' value={props.pages} />
            <input type='button' name='pages' value='+' onClick={props.numberInput}/>
        </div>
        <div>Número de idiomas: 
            <input type='button' name='languages' value='-' onClick={props.numberInput}/> 
            <input type='text' value={props.languages}/>
            <input type='button' name='languages' value='+' onClick={props.numberInput}/>
        </div>
    </form>
    )

    return text;
}

export default CreateInput;
//onChange ={(e) => props.setPages(e.target.value)}