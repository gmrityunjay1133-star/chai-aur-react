import  { useState } from "react"

function App() {
  const [color , setColor ] = useState("green")
  

  return (
    <div className = "w-full h-screen duration-200"
    style = {{backgroundColor: color}}
    >
      <div className = "fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2"> 
        <div className = ' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'> 
          <button
          onClick = {() => setColor("Blue")}
          className= "outline-none px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor: "Blue"}}>Blue
          </button>
          <button
          onClick = {() => setColor("Orange")}
          className= "outline-none px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor: "Orange"}}>Orange
          </button>
          <button
          onClick = {() => setColor("Purple")}
          className= "outline-none px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor: "Purple"}}>Purple
          </button>
          <button
          onClick = {() => setColor("Black")}
          className= "outline-none px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor: "Black"}}>Black
          </button>
          <button
          onClick = {() => setColor("Gray")}
          className= "outline-none px-4 py-1 rounded-full text-white shadow-sm"
          style={{backgroundColor: "Gray"}}>Gray
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default App
