type Props = {
  searchText: string
  setSearchText: (s: string) => void
  onCheck: (v: boolean) => void
}

export default function SearchBar(props: Props) {
  const handleTyping = (e) => props.setSearchText(e.target.value)

  return (
    <form>
      <input 
        id="product-filter"
        type="search"
        pattern="[a-zA-Z0-9]{3,}"
        placeholder="Search..."
        value={props.searchText}
        onChange={handleTyping}
      />
      <div>
        <input id="only-in-stock" type="checkbox" name="only-in-stock" />
        <label htmlFor="only-in-stock">Only show products in stock</label>
      </div>
    </form>
  )
}
