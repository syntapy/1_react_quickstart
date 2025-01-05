import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

import getProductData from "../../data/index"
import { ProductData } from "../../data/index"

export default function FilterableProductTable() {

    const data: ProductData = getProductData()

    return (
        <div>
            <SearchBar />
            <ProductTable data={data} />
        </div>
    )
}
