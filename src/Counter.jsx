import React, { useState } from 'react'

const Counter = () => {

    let [count,setcount]=useState(0)
    const inc=()=>{
        setcount(count+1)
    }
    const dec=()=>{
        setcount(count-1)
    }
  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>Drecement</button>
    </div>
  )
}

export default Counter