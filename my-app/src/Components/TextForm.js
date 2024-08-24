import React,{useState} from 'react'
export default function TextForm(props){


    // Enabling the Dark and ligh mode
   
    const [btncont, setbtn] = useState("Enable Dark Mode");
    const [mystyle, setstyle] = useState (
        {
            color:'black',
            backgroundColor:'white'
        }
    )
    let darkmode = ()=>{
        if(mystyle.color == 'black'){
            setstyle({
                color:'white',
                backgroundColor:'black',
                outline:'none',
                border:'none'
            })
            setbtn("Enable Light Mode");
            props.showAlert("Dark Mode Done.",'success')
        }
        else{
            setstyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtn("Enable Dark Mode");
            props.showAlert("Light Mode Done.",'success')
        }
    }
    const clicked = ()=>{
        console.log("Clicked");
        let newText = Text.toUpperCase();
        setText(newText);
        // setText("Hey I am setted to New");
        props.showAlert("Yes It is changed into the UpperCase.",'success')
    }

    const changing = (event)=>{
        console.log("Changed");
        setText(event.target.value);
    }
    const clicked2 = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Text got lowerCase.",'success')
    }

    const clear = ()=>{
        setText(" ");
        props.showAlert("Text got removed.",'danger');
    }
    const reverse = ()=>{
       let newText = '';
       for(let i = Text.length-1; i >= 0; i--){
        newText += Text[i];
       }
       setText(newText);
       props.showAlert("Text got reversed.",'success')
    }
    const capital = ()=>{
        let newText;
        let words = Text.split(" ");

        for(let index = 0; index < Text.length; index++){
            if(words[index])
            newText += Text[index][0].toUpperCase() + words[index].slice(1) + "  ";
        }
        setText(newText);
    }
    const [Text,setText] = useState("Enter text here....");
    const copy = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text Got copied.",'success')
    }
        const exspaces = () => {
            let newText = Text.replace(/\s{2,}/g, " ");
            setText(newText);
            props.showAlert("ExtraSpaces got removed.",'danger')

        };
   
        const Bold = ()=>{
            let element = document.getElementById('exampleFormControlTextarea1');
            if(element.style.fontWeight == 'normal'){
                element.style.fontWeight = 'bold';
                setbol("UnBold");
                props.showAlert("Text got bold.",'success')
            }
            else{
                console.log("Unbold")
                element.style.fontWeight = 'normal'
                setbol("Bold");
            }
        }
        
        const [under, setUnder] = useState('Underline');

        const underline = () => {
            const element = document.getElementById('exampleFormControlTextarea1');
            const currentStyle = window.getComputedStyle(element).textDecoration;
    
            if (currentStyle.includes('underline')) {
                element.style.textDecoration = 'none';
                setUnder('Underline');
            } else {
                element.style.textDecoration = 'underline';
                setUnder('Un Underline');
            }
            props.showAlert("Text got underlined",'success')
        };
        const [bol, setbol] = useState("Bold");
        return(
        <>
<div class="mb-3" style={mystyle}>
    <h1>{props.heading}</h1>
  {/* <label for="exampleFormControlTextarea1" class="form-label">Text Area</label> */}
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" value={Text} onChange={changing} style={mystyle}></textarea>
  <button type="button" class="btn btn-primary my-3" onClick={clicked}>Upper</button>
  <button type="button" class="btn btn-success my-3 mx-2" onClick={clicked2}>Lower</button>
  <button type="button" class="btn btn-danger my-3 mx-2" onClick={clear}>CLear text</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={reverse}>Reverse</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={capital}>Captilized</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={copy}>Copy</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={exspaces}>Extra Spaces</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={Bold}>{bol}</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={underline}>{under}</button>
  <button type="button" class="btn btn-primary my-3 mx-2" onClick={darkmode}>{btncont}</button>



</div>

<div className="container" style={mystyle}>
    <h1>Text Summary</h1>
    <p class="my-3">{Text.split(" ").length} words and {Text.length} Characters</p>
    <p>Slow Reader Can Take {0.08*Text.split(" ").length}M while reading.</p>
    <p>Fast Reader Can Take {0.01*Text.split(" ").length}M while reading.</p>
    <h2 class="my-4">Preview</h2>
    <p>{Text}</p>

</div>
</>
    );
}