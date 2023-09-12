import React,{useState} from "react";

export default function TextArea(props){
    const [text,setText] = useState('Enter text here');
    const handleupChange = () =>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleloChange = () =>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleChange = (event) =>{
        setText(event.target.value);
    }
    const handleclearChange = () =>{
        setText('');
    }
    const handleCopy = () =>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlecaprChange = () =>{
        let dumm=text.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
        setText(dumm); 
    }
    return(
        <>
<div class="mb-3" style={{color:props.mode==='dark'?"white":"black"}}>
  <label for="exampleFormControlTextarea1" class="form-label">Enter Text to be analyzed</label>
  <textarea class="form-control" id="mybox" rows="8" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?"#343a40":"white", color:props.mode==='dark'?"white":"black"}}></textarea>
  <button className="btn btn-success mx-2" onClick={handleupChange}>Convert to Uppercase</button>
  <button className="btn btn-success mx-2" onClick={handleloChange}>Convert to Lowercase</button>
  <button className="btn btn-success mx-2" onClick={handleclearChange}>Clear Text</button>
  <button className="btn btn-success mx-2" onClick={handlecaprChange}>Capitalization</button>
  <button className="btn btn-success mx-2" onClick={handleCopy}>Copy</button>
</div>

<div className="container" style={{color:props.mode==='dark'?"white":"black"}}>
    <h1>Your text summary</h1>
    <p>{text.length<1 ? 0 : text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08* text.split(" ").length} Minutes read</p>
</div>
</>
    )
    
}