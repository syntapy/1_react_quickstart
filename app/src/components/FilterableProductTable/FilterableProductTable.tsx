import { useState } from 'react'
import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

import style from "../../style.ts"

import { ProductData, _filterProductData } from "../../data/index"
import getProductData from "../../data/index"

export default function FilterableProductTable() {
  const [searchText, setSearchText] = useState('')
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)

  const data: ProductData = getProductData()
  let dataFiltered: ProductData = {items: []}
  
  dataFiltered = _filterProductData(data, searchText)

  return (
    <div 
      data-testid="filterable-product-table"
      className={"p-16 " + style.licorice_border}
    >
      <SearchBar
        setSearchText={setSearchText}
        setOnlyInStock={setShowOnlyInStock}
        searchText={searchText}
      />
      <ProductTable data={dataFiltered}/>
    </div>
  )
}
