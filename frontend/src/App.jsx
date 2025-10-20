import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'
function App() {
  const [jokes,setjokes] = useState([])
  useEffect(()=>{
    axios.get("/api/jokes")
    .then(res=>{
      setjokes(res.data)
    })
    .catch(err=>console.log(err))
  })

  return (
    <>
      <h1>heheh hehehe hehehe</h1>
      <p>{jokes.length}</p>
      {
        jokes.map((item) => {
          return(
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.joke}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
