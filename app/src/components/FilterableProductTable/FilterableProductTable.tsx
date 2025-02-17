import { useState } from 'react'
import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

import style from "../../style.ts"

import { ProductData, _filterProductData } from "../../data/index"
import getProductData from "../../data/index"

export default function FilterableProductTable(props: style.StyleProps) {
  const [searchText, setSearchText] = useState('')
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)

  const data: ProductData = getProductData()
  let dataFiltered: ProductData = {items: []}
  
  dataFiltered = _filterProductData(data, searchText)

  return (
    <div 
      data-testid="filterable-product-table"
      className={style.licorice_border + " py-16 pl-16 pr-32 flex flex-row items-start justify-between " + props.className}
    >
      <SearchBar
        className=""
        setSearchText={setSearchText}
        setOnlyInStock={setShowOnlyInStock}
        searchText={searchText}
      />
      <ProductTable
        className=""
        data={dataFiltered}
      />
    </div>
  )
}
