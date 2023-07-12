import React,{useState} from 'react'

const FormsText = () => {

    let [text,setText] = useState("");

    function changeText(event){
        setText(event.target.value+"!")
    }


    return (
      <div>
        <label>Enter your name:</label>
        <br/>
        <br/>
        <input type="text" onChange={changeText}/>
        <br/>
        <br/>
        <p>{text}</p>
      </div>
    );
}

export default FormsText;



