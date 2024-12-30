import { useState } from 'react'
import './App.css'
import FilterableProductTable from "./components/FilterableProductTable/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <FilterableProductTable />
  )
}

export default App
