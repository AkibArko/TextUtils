import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    };

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    };

    const handleClearClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Cleared text!", "success")
    };

    // we need to write this function otherwise we can't type inside our textarea and onChange method give us by default event peramiter
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);  // this help us to write inside textarea
    };

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        // text.setSelectionRange(0, 9999)  // we dont need this line
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const [text, setText] = useState("");
    // text = "New text";   // Wrong way to change the state
    // setText("New text");   // Correct way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{backgroundColor: props.mode === 'dark'? '#42424e' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>
                    Copy text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces 
                </button>
            </div>
            <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
                <h1>Your text summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}
