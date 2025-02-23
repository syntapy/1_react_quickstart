import { beforeEach, afterEach, describe, it, expect, test } from 'vitest'

import { _filterProductData } from "./index"
import type { ProducData, ProductDataItem } from "./index"
import getProductData from "./index"

const data = getProductData()  

const apples: ProductData = {
  items: [
    {"category": "Fruits", "name": "Apples", "price": 3, "stocked": true },
  ]
}

const bellPeppers: ProductData = {
  items: [
    {"category": "Vegetables", "name": "Red Bell Peppers", "price": 4, "stocked": true },
    {"category": "Vegetables", "name": "Orange Bell Peppers", "price": 4, "stocked": true },
    {"category": "Vegetables", "name": "Yellow Bell Peppers", "price": 4, "stocked": true },
    {"category": "Vegetables", "name": "Green Bell Peppers", "price": 4, "stocked": true },
  ]
}

const ratFood: ProductData = {
  items: [
    {"category": "For Pets", "name": "Rat Food", "price": 8, "stocked": true },
  ]
}

test('Data filter 1', () => {
  expect(_filterProductData(data, "Apples")).toStrictEqual(apples)
})

test('Data filter 2', () => {
  expect(_filterProductData(data, "Bell")).toStrictEqual(bellPeppers)
})

test('Data filter 3', () => {
  expect(_filterProductData(data, "Pets")).toStrictEqual(ratFood)
})
