export default function SearchBar() {
  return (
    <form>
      <input id="product-filter" type="search" pattern="[a-zA-Z0-9]{3,}" placeholder="Search..." />
      <div>
        <input id="only-in-stock" type="checkbox" name="only-in-stock" />
        <label htmlFor="only-in-stock">Only show products in stock</label>
      </div>
    </form>
  )
}
