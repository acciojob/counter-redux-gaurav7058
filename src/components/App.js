
import React, { useState } from "react";
import './../styles/App.css';
import {useDispatch, useSelector} from "react-redux"
import { decrement, increament } from "../Utils/action";
const App = () => {
  const dispatch=useDispatch()
  const data=useSelector(store=>store.counter.count)
  return (
    <div>
      <h1>{data}</h1>
        <button onClick={()=>dispatch(increament(1))}>Increment</button>
        <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default App
