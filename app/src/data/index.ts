export type ProductDataItem = {
    category: string
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
