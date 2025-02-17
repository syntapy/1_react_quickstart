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
      className={style.licorice_border + " p-16 " + props.className}
    >
      <SearchBar
        className="inline-block"
        setSearchText={setSearchText}
        setOnlyInStock={setShowOnlyInStock}
        searchText={searchText}
      />
      <ProductTable
        className="inline-block"
        data={dataFiltered}
      />
    </div>
  )
}
