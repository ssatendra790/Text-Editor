import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearClick = ()=>{
        // console.log("LowerCase was clicked"+text);
        let newText ='';
        setText(newText);
        props.showAlert("Cleared", "success")
    }
    const handleReverseClick = ()=>{
        // console.log("LowerCase was clicked"+text);
        // let newText ='';
         /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Reversed", "success")
    }

    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
        let uppercaseword =' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1)+" "});
        setText(uppercaseword)
        props.showAlert("Capitalization Done", "success")
    }


    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText] = useState('');
  return(
<>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',  color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled = {text.length===0} className ="btn btn-info mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled = {text.length===0} className ="btn btn-primary mx-2 my-2" onClick={capitalFirstLetter}>Capitalize</button>
        <button disabled = {text.length===0} className ="btn btn-success mx-2 my-2" onClick={handleReverseClick}>Reverse Text</button>
        <button disabled = {text.length===0} className ="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear All</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Your Text Summary</h2>
          <p>Words : {text.split(" ").filter((element)=>{return element.length!==0}).length } || Characters : {text.length} </p>
          <p>It will take {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Type something in above text-box to preview here.."}</p>
    </div>
</>
)
}
