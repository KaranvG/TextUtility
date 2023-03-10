import React, { useState } from "react";

export default function TextForm(props) {
const handledupperClick = () => {
  // console.log("uppercase button clicked : ");
  let newtest = text.toUpperCase();
  setText(newtest);
  props.showAlert("Convert to Uppercase!", "success");
};
const handledlowerClick = () => {
  // console.log("lowercase button clicked : ");
  let newtest = text.toLowerCase();
  setText(newtest);
  props.showAlert("Convert to Lowercase!", "success");
};
const handledonChange = (event) => {
  // console.log("On change fired");
  setText(event.target.value);
};
const handledclear = () => {
  // console.log("On change fired");
  setText("");
};

const [text, setText] = useState("");
//   text="new text"; wrong way to change a state
//   setText{"new text"};  Correct way to change the state.
return (
  <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          placeholder="Enter text here"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handledonChange} 
          style={{backgroundColor:props.mode==='dark'?'#042743':'white', //#211d1d
          color : props.mode==='dark'?'white':'black'}} //#1b1636 //#042743 //#216778  //#162c35
        ></textarea>
      </div>
      <button className="btn btn-danger" onClick={handledupperClick}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-info mx-2" onClick={handledlowerClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-success" onClick={handledclear}>
        Clear Text
      </button>
    </div>
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Text Summary</h2>
      <p>
        {" "}
        {text.split(" ").length} words and {text.length} character.
      </p>
      <p>{text.split(/\r\n|\r|\n/).length} Number of lines.</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
  </>
);
}
