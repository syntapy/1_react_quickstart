import _ from 'lodash'

type Props = {
  searchText: string
  setSearchText: (s: string) => void
  onCheck: (v: boolean) => void
}

export default function SearchBar(props: Props) {
  function handleTyping<T>(e: T) {
    function caller(e: T) {
      props.setSearchText(e.target.value)
    }
    _.debounce(caller, 300)(e)
  }

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
