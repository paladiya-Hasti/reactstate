import React, { useState } from 'react'

const Textinput = () => {
    let [text,settext]=useState("")
    const  handtext=(e)=>{
        settext(e.target.value)
    }
  return (
    <div>
        <h3>TEXT INPUT</h3>
        <input type="text" value={text} onChange={handtext} placeholder='type something.....' />
        <p>{text}</p>
    </div>
  )
}

export default Textinput