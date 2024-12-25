import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"

import data from "../../assets/data.json"

export default function ProductTable() {
    return (
        <>
            <ProductCategoryRow category="Vegetables" />
            <ProductRow item="Lettuce" price={6} stocked={true} />
        </>
    )
}
