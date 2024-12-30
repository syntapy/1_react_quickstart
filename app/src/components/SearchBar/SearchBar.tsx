export default function SearchBar() {
    return (
        <div>
            <input id="product-filter" type="search" pattern="[a-zA-Z0-9]{3,}" placeholder="Search..." />
            <div>
                <input id="only-in-stock" type="checkbox" name="only-in-stock" />
                <label for="only-in-stock">Only show products in stock</label>
            </div>
        </div>
    )
}
