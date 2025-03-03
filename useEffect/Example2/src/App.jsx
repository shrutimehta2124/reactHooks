import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((Response) => Response.json())
    .then((json) => setData(json))
  })
  return (
    <div>
        <h2>Post:</h2>
        {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  )
}

export default App
