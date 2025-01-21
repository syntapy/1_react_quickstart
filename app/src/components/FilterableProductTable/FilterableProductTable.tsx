import React from 'react'

import { useState } from 'react'
import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

import { ProductData } from "../../data/index"
import getProductData from "../../data/index"

export default function FilterableProductTable() {
  const data: ProductData = getProductData()
  const [searchText, setSearchText] = useState('')
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)

  return (
    <div>
      <SearchBar
        setSearchText={setSearchText}
        setShowOnlyInStock={setShowOnlyInStock}
        searchText={searchText}
      />
      <ProductTable data={data}/>
    </div>
  )
}
