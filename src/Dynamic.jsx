import React, { useState } from 'react'

const Dynamic = () => {
    let [item,setitem]=useState("")
    let[items,setitems]=useState([])

    const  handleitem=(e)=>{
        setitem(e.target.value)
    }
    const handleitems=(e)=>{
        setitems([...items,{id:nextId++,item:item}])
    }
  return (
    <div>
        <h3>DynamicArray</h3>
        <input type="text" value={item}  onChange={handleitem}placeholder=' please enter your' />
        <button onChange={handleitems}>add item</button>
    </div>
  )
}

export default Dynamic