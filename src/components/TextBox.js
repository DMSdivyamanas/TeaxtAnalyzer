import React,{useState} from 'react'

export default function TextBox(props) {
  const [text,setText] = useState('Enter the text you wanna convert!') 



  const onUpClick = ()=>{
    let newText = text.toUpperCase()
    console.log(newText)
    setText(newText)
  }
  const onDownClick = ()=>{
    let newText = text.toLowerCase()
    console.log(newText)
    setText(newText)
  }
  const onClearClick = ()=>{
    let newText = ''
    console.log(newText)
    setText(newText)
  }
  const onInvertClick = ()=>{
    let newText = ''
     for (let i = 0; i < text.length; i++) {
      if (text.charAt(i)===text.charAt(i).toUpperCase()) {
        newText+=text.charAt(i).toLowerCase()
      }
      else{
        newText+=text.charAt(i).toUpperCase()
      }
    } 
    console.log(newText)
    setText(newText)
  }
   const onCopy = ()=>{
    const text = document.getElementById("textBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    alert("Copied Succesfully")
   }

  const onChange=(event)=>{
    if(text==='Enter the text you wanna convert!') setText('')
    else setText(event.target.value)
  }


  return (
    <>
    <div>
        <div className="mb-3" >
        <label htmlFor=""><b><h1>{props.heading}</h1></b></label>

        <textarea className="form-control" value={text} id="textBox"  rows="6" onChange={onChange}></textarea>

        <button className="btn btn-primary my-3" onClick={onUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={onDownClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-3 " onClick={onClearClick}>Clear All</button>
        <button className="btn btn-primary my-3 mx-3" onClick={onInvertClick}>iNVERT</button>
        <button className="btn btn-primary my-3 " onClick={onCopy}>Copy Text</button>
        </div>
    </div>
    <div className="container">
        <h2>Overview</h2>
        <p>This line has {text.split(" ").length} words & {text.length-text.split(" ").length+1} characters</p>
        <p>It would take approximately {text.split(" ").length * 0.008} minutes to read it </p>
    </div>
    </>
  )
}
