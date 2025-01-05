import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

export default function FilterableProductTable() {
    return (
        <div>
            <SearchBar />
            <ProductTable />
        </div>
    )
}
