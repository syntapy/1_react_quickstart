import React from 'react'

import { useState } from 'react'
import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

import { ProductData, ProductDataItem } from "../../data/index"
import getProductData from "../../data/index"

export default function FilterableProductTable() {
  const [searchText, setSearchText] = useState('')
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)

  const data: ProductData = getProductData()
  const dataFiltered: ProductData = {items: []}  as ProductData

  return (
    <div>
      <SearchBar
        setSearchText={setSearchText}
        setShowOnlyInStock={setShowOnlyInStock}
        searchText={searchText}
      />
      <ProductTable data={dataFiltered}/>
    </div>
  )
}
