import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert(" Converted to UpperCase", "Success ");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert(" Converted to LowerCase", "Success ");
  };
  const handlerevClick = () => {
    let reversed = text.split(".").reverse().join(". ");
    setText(reversed);
    props.showalert(" The Content is Reversed", "Success ");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showalert(" Text Cleared", "Success ");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert(" The Content is Spoken", "Success ");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            placeholder="Enter Your Text Here"
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlerevClick}>
          Reverse Sentences
        </button>
        <button className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }
          Words and {text.length} Characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(4)} Minutes to read.</p>
        <p>{text.split(".").length - 1} Sentences </p>
      </div>
    </>
  );
}
