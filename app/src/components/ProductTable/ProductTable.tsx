import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"

export default function ProductTable() {
    return (
        <>
            <ProductCategoryRow category="Vegetables" />
            <ProductRow item="Lettuce" price={6} stocked={true} />
        </>
    )
}
