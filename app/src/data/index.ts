type Name = string

function assertName(value: string): asserts value is Name {
  const nameRegex: RegExpMatchArray = /^[A-Za-z\s]*$/
  if (!nameRegex.test(value)) {
    throw new Error(`"{value}" does not consist of only alphabetical characters or spaces`)
  }
}

type PositiveNumber = number

function assertPositiveNumber(value: number): asserts value is PositiveNumber {
  if (value <= 0) {
    throw new Error(`"{value}" is not positive non-zero`)
  }
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

function isProductData(data: ProductData): data is ProductData {
  return Array.isArray(data.items) && data.items.every((item: ProductDataItem) => 
      typeof item.category === 'string' &&
      typeof item.name === 'string' &&
      typeof item.price === 'number' &&
      typeof item.stocked === 'boolean')
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
