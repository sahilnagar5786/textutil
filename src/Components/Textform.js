import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Text Converted To Uppercase!","success")
    }
    const handleloClick = () => {
        //console.log("Uppercase was clicked");
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("Text Convert To Lowercase!","success")

    }
    const handelonchange = (event) => {
        //console.log("on change ");
        settext(event.target.value);
    }

    const handlecopy =()=>{
        var text =document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("Text Copied!","success")

    }
        const handleExtraspace =()=>{
            let newtext = text.split(/[ ]+/);
            settext(newtext.join(" "));
            props.showalert("Extra Space Has Been Removed!","success")

        }
        const cleartext= ()=>{
            let newtext = '';
            settext(newtext);
            props.showalert("All Text Has Been Cleard!","success")

        }
    
    const [text, settext] = useState('');
    // text ="new text"; WRONG WAY TO CHANGE THE STATE
    // settext("new text") RIGHT WAY TO CHANGE THE TEXT
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelonchange} style={{backgroundColor:
                     props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={cleartext}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove Extra Space</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minuets To Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something To Preview"}</p>
            </div>
        </>
    )
}
