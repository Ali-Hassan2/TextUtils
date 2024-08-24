import React,{useState} from 'react'
export default function TextForm(props){
    const clicked = ()=>{
        console.log("Clicked");
        let newText = Text.toUpperCase();
        setText(newText);
        // setText("Hey I am setted to New");
    }

    const changing = (event)=>{
        console.log("Changed");
        setText(event.target.value);
    }
    const clicked2 = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const clear = ()=>{
        setText(" ");
    }
    const reverse = ()=>{
       let newText = '';
       for(let i = Text.length; i >= 0; i--){
        newText += Text[i];
       }
       setText(newText);
    }
    const [Text,setText] = useState("Enter text here....");
    return(
        <>
<div class="mb-3">
    <h1>{props.heading}</h1>
  {/* <label for="exampleFormControlTextarea1" class="form-label">Text Area</label> */}
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" value={Text} onChange={changing}></textarea>
  <button type="button" class="btn btn-primary my-3" onClick={clicked}>Upper</button>
  <button type="button" class="btn btn-success my-3 mx-2" onClick={clicked2}>Lower</button>
  <button type="button" class="btn btn-danger my-3 mx-2" onClick={clear}>CLear text</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={reverse}>Reverse</button>
</div>

<div className="container">
    <h1>Text Summary</h1>
    <p class="my-3">{Text.split(" ").length} words and {Text.length} Characters</p>
    <p>Slow Reader Can Take {0.08*Text.split(" ").length}M while reading.</p>
    <p>Fast Reader Can Take {0.01*Text.split(" ").length}M while reading.</p>s
    <h2 class="my-4">Preview</h2>
    <p>{Text}</p>

</div>
</>
    );
}