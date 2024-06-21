import React, { useState } from 'react'
import "./Counter.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Counter = () => {
  let[count,setcount]=useState(0);
  return (
    <div className='d-flex justify-content-center align-items-center ext-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 m-3'>
     <button className='btn bg-primary m-3 bg-danger-subtle border border-primary-subtle rounded-circle' onClick={()=>setcount(count--)}>-</button>
        <p className='pt-3'>{count}</p>
        <button className='btn bg-primary m-3 bg-danger-subtle border border-primary-subtle rounded-circle' onClick={()=>setcount(count++)}>+</button>
    </div>
  )
}

export default Counter
