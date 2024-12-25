import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"

import data from "../../assets/data.json"

export default function ProductTable() {
    return (
        <div>
            <ul>
                <ProductCategoryRow category="Vegetables" />
                <ProductRow item="Lettuce" price={6} stocked={true} />
                <ProductRow item="Tomato" price={4} stocked={true} />
                <ProductRow item="Carros" price={3} stocked={true} />
            </ul>
        </div>
    )
}
