import React from 'react'
import _ from 'lodash'

type Props = {
  searchText: string
  setSearchText: (s: string) => void
  onCheck: (v: boolean) => void
}

export default function SearchBar(props: Props) {
  const debouncedSetText = React.useCallback(
    _.debounce((s: string) => props.setSearchText(s), 300)
    , [props.setSearchText]
  )

  const handler = (e: React.ChangeEventHandler<HTMLInputElement>) => debouncedSetText(e.target.value)

  console.log(props.searchText)
  return (
    <form>
      <input 
        id="product-filter"
        type="search"
        pattern="[a-zA-Z0-9]{3,}"
        placeholder="Search..."
        value={props.searchText}
        onChange={handler}
      />
      <div>
        <input id="only-in-stock" type="checkbox" name="only-in-stock" />
        <label htmlFor="only-in-stock">Only show products in stock</label>
      </div>
    </form>
  )
}
