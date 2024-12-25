import { useState } from 'react'
import './App.css'
import ProductTable from "./components/ProductTable/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductTable />
  )
}

export default App
