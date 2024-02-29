import React, {useState} from 'react'

export default function Textform(props) {

    const handleOnChange = (event)=>{
        // console.log("click");
        setText(event.target.value);
    }
    
    const handleUpClick = ()=>{
        // console.log("on change " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("on change " + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("on change " + text);
        let newText='';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Text copied to Clipboard!", "success");
    }

    const handleSpaceClick = ()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const[text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder="Enter a text here" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#3e698a', color:props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1>Your text Summary...</h1>
            <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read.</p>
            <h2>Preview...</h2>
            <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
        </>
    )
}
