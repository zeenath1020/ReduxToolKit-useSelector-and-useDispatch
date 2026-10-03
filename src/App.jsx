import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './counterslice'
//useSelector -  to select/read a particular state from global state
//useDispatch - to update or modify the state


function App() {
//   state.slicename.statename
// state.counterslice.name

const selectedstatevar=useSelector((st)=>st.counterslice.name)
const selectedstatevarmarks=useSelector((st)=>st.counterslice.marks)


const d=useDispatch()

  return (
    <>
    <h1>this is redux app </h1>
    <p>{selectedstatevar}</p>
    <p>{selectedstatevarmarks}</p>

    <button onClick={()=>d(increment())}>inc</button>
    <button onClick={()=>d(decrement())}>Dec</button>
    <button onClick={()=>d(reset())}>reset</button>
    </>
  )
}

export default App
