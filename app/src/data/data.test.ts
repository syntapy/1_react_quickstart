import { beforeEach, afterEach, describe, it, expect, test } from 'vitest'

import { ProductData, ProductDataItem, _filterProductData } from "./index"
import getProductData from "./index"

const apples: ProductData = [
  {"category": "Fruits", "name": "Apples", "price": 3, "stocked": true },
]

const bellPeppers: ProductData = [
  {"category": "Vegetables", "name": "Orange Bell Peppers", "price": 4, "stocked": true },
  {"category": "Vegetables", "name": "Yellow Bell Peppers", "price": 4, "stocked": true },
  {"category": "Vegetables", "name": "Green Bell Peppers", "price": 4, "stocked": true },
]

test('Data filter', () => {
  const data = getProductData()  

  expect(_filterProductData(data, "Apples").items).toStrictEqual(apples)
})
