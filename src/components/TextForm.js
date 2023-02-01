import React, { useState } from "react";

export default function TextForm(props) {
  const handeltoUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handeltoLwCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handelclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear", "success");
  };

  const handelrevers = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Revers text", "success");
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(""); //remember this syntext, Here settext is a function.
  return (
    <>
   
    <div >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handelOnChange}
        ></textarea>
        <button className="btn btn-primary m-2" onClick={handeltoUpCase}>
          Covert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handeltoLwCase}>
          Covert to Lowercase
        </button>

        <button className="btn btn-primary m-2" onClick={handelclear}>
          Clear
        </button>

        <button className="btn btn-primary m-2" onClick={handelrevers}>
          Reverse the text
        </button>
      </div>
    </div>
    <div className="container my-5">
      <h2>Your text summery</h2>
      <p>{text.split(" ").length} word and {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} minitues to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
