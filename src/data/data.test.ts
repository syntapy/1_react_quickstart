import { expect, test } from 'vitest'

import { _filterProductData, isName, isPositiveNumber, isProductDataItem } from "./index"
import type { ProductData } from "./index"
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

test('Name Type 1', () => {
  expect(isName("Good")).to.be.equal(true)
})

test('Name Anti Type 1', () => {
  expect(isName("b$AAd")).to.be.equal(false)
})

test('Type Test', () => {
  const productDataItem = {
    category: "GoodItem",
    name: "GoodItemName",
    price: 666,
    stocked: true
  }

  expect(isProductDataItem(productDataItem)).to.be.equal(true)
})

test('Type Anti-Test 2', () => {
  const productDataItem = {
    category: "b_AAdItem",
    name: "GoodItemName",
    price: 666,
    stocked: true
  }

  expect(isProductDataItem(productDataItem)).to.be.equal(false)
})

test('Type Anti Test 3', () => {
  expect(isPositiveNumber(0)).to.be.false
})

test('Type Test 4', () => {
  expect(isPositiveNumber(666)).to.be.true
})

test('Type Anti Test 5', () => {
  expect(isPositiveNumber(666)).to.be.true
})
