import React, { useState } from 'react'

function MyInput() {
   function handelChangeValue(event){
    setMyInputValue(event.target.value)
   }
   const [myInputValue,setMyInputValue]=useState("");

  return (

    <div>
        <label>Yor Name</label>
        <input value={myInputValue} onChange={handelChangeValue}/> 
    </div>
  )
}

export default MyInput