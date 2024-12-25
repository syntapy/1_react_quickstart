import { useState } from 'react'
import './App.css'
import ProductRow from "./components/ProductRow/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ProductRow item="rat food" price={6} />
    </>
  )
}

export default App
