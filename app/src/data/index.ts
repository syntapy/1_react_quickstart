type CapitalizedWord = string;

function assertCapitalizedWord(value: string): asserts value is CapitalizedWord {
  const categoryStringRegex: RegExpMatchArray = /^[A-Z][a-z][a-z][a-z][a-z]*$/
  if (!categoryStringRegex.test(value)) {
    throw new Error(`"{value}" is not a capitalized word`)
  }
}

export type ProductDataItem = {
    category: CapitalizedWord 
    name: string
    price: number
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

export default function getProductData(): ProductData {
  if (!isProductData(jsonData)) {
    throw new Error("Invalid JSON structure")
  }

  return jsonData
}
