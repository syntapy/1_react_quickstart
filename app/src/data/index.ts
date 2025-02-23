type Name = string

function assertName(value: string): asserts value is Name {
  const nameRegex: RegExpMatchArray = /^[A-Za-z\s]*$/
  if (!nameRegex.test(value)) {
    throw new Error(`"{value}" does not consist of only alphabetical characters or spaces`)
  }
}

export function isName(value: string): value is Name {
  try {
    assertName(value)
  } catch(e){
    return false
  }

  return true
}

export function newName(value: string): Name {
  assertName(value)
  return value as Name
}

export type PositiveNumber = number

function assertPositiveNumber(value: number): asserts value is PositiveNumber {
  if (value <= 0) {
    throw new Error(`"{value}" is not positive non-zero`)
  }
}

function isPositiveNumber(value: number):value is PositiveNumber {
  try {
    assertPositiveNumber(value)
  } catch(e){
    return false
  }

  return true
}

export function newPositiveNumber(value: number): PositiveNumber {
  assertPositiveNumber(value)
  return value as PositiveNumber
}

export type ProductDataItem = {
    [key: string]: Name | PositiveNumber | boolean
    category: Name 
    name: Name
    price: PositiveNumber
    stocked: boolean
}

export type ProductData = {
    items: ProductDataItem[]
}

import jsonData from "./data.json" with { type: 'json' }

export function isProductDataItem(item: any): boolean {
  if (isName(item.category) && isName(item.name) && isPositiveNumber(item.price) && typeof item.stocked === "boolean") {
    return true
  }

  return false
}

export function isProductData(data: ProductData): data is ProductData {
  return Array.isArray(data.items) && 
    data.items.every((item: ProductDataItem) => isProductDataItem(item))
}

export function _filterProductData(data: ProductData, filterText: string): ProductData {
  const dataFiltered: ProductData = {items: []}  as ProductData

  if (filterText === "")
    return data

  data.items.forEach(item => {
    let key: string
    for (key in item)
      if (key.includes(filterText))
        dataFiltered.items.push(item)
      else if (typeof item[key] === "string" 
               && (item[key] as string).includes(filterText))
        dataFiltered.items.push(item)
  })

  return dataFiltered
}

export default function getProductData(): ProductData {
  if (!isProductData(jsonData)) {
    throw new Error("Invalid JSON structure")
  }

  return jsonData
}
