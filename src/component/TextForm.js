import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('Enter your Text Here');
    // text = "jniwerwew" //wrong way to change  the text
    const handleClick = () => {
        console.log("upperCase btn is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        console.log("lowercase btn is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnchange = (e) => {
        console.log("On change");
        setText(e.target.value)
    }

    const handleCopy = function(){
        console.log("I am Copy");
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" onChange={handleOnchange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleClick} >Convert To Uppercase</button>
                <button className="btn btn-success " onClick={handleLowClick} >Convert To LowerCase</button>
                <button className="btn btn-primary m-2" onClick={handleCopy} >Copy to Clip</button>
            </div>

            <div className="container my-3">
                <h1>Text Summary</h1>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Can be in the given minutes</p>

                <h2>Preview</h2>
                <p>{text.length>0 ? text:"Enter Something to preview"}</p>
            </div>
        </>

    );

}

export default TextForm;
