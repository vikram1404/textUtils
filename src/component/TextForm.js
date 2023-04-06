import React, {useState} from 'react'
 
export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to Upper case!", "success :"); 
  }
  const handleLoClick = ()=>{
    
    let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted  to Lower Case!", "success :");
  }
  const handleClearClick = ()=>{
   
    let newText = "";
     setText(newText);
     props.showAlert("Text Cleared!", "success :");
  }
  const handleCopyClick = ()=>{
      let newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Copied to Clipboard!", "success :");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra Spaces Removed!", "success :");
  }

   const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  // text = "new text"; Wrong way to change the state. 
  // setText("new text"); Right way to change the state 
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#274055'}}>
           <h1>{props.heading}</h1>
           <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#274055':'white',color: props.mode ==='dark'?'white':'#274055'}} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear text</button>
           <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
           <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container py-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text word summary</h2>
      {/* <p> {text.split(" ").length} words and {text.length} Character</p> */}
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
 