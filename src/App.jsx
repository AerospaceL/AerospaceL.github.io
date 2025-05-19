import { useState } from 'react'
import img from '@/assets/login.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>this is app</div>
      <img src={img}></img>
    </>
  )
}

export default App
