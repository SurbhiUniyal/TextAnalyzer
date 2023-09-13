import React,{useState} from "react";

export default function TextArea(props){
    const [text,setText] = useState('');
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
        navigator.clipboard.writeText(text);
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
  <button disabled={text.length===0}className="btn btn-success mx-2 my-2" onClick={handleupChange}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-2  my-2" onClick={handleloChange}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleclearChange}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handlecaprChange}>Capitalization</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleCopy}>Copy</button>
</div>

<div className="container" style={{color:props.mode==='dark'?"white":"black"}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.08* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
</div>
</>
    )
    
}