export interface ProductDataItem {
    category: string;
    name: string;
    price: number;
    stocked: boolean;
}

export interface ProductData {
    items: ProductDataItem[];
}

import jsonData from "./data.json" assert { type: 'json' }

export default function getProductData(): ProductData {
    console.log("Inside getProductData")
    console.log(`data: ${jsonData}`)
    console.log(`data items: ${jsonData.items}`)
    return jsonData
}
