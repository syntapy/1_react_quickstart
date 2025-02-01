import { useState } from 'react'

import React from 'react'
import _ from 'lodash'
import { searchDebounceTime } from '../../utils'

import style from "../../style.ts"

type Props = {
  searchText: string
  setSearchText: (s: string) => void
  setOnlyInStock: (v: boolean) => void
}

export default function SearchBar(props: Props) {
  const [localSearchText, setLocalSearchText] = useState(props.searchText)

  const debouncedSetText = React.useCallback(
    _.debounce((s: string) => props.setSearchText(s), searchDebounceTime),
    [props.setSearchText]
  )

  const handler = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue: string = e.currentTarget.value
    setLocalSearchText(newValue)
    debouncedSetText(newValue)
  }

  return (
    <form className="">
      <input 
        id="product-filter"
        type="search"
        pattern="[a-zA-Z0-9]{3,}"
        placeholder="Search..."
        value={localSearchText}
        onInput={handler}
        className={"placeholder:text-licorice-500 pl-2 w-72 mb-5"+style.lemon_lime_border}
      />
      <div>
        <input
          id="only-in-stock"
          type="checkbox"
          name="only-in-stock"
          className={"appearance-none bg-magnolia-500 border-licorice-500 border-2 cursor-pointer align-top "
            + " checked:border-orange-peel-500 checked:bg-orange-peel-500 bg-clip-content"
            + " p-[3px] w-5 h-5"
            + " rounded-md"}
        />
        <label htmlFor="only-in-stock" >
          Only show products in stock
        </label>
      </div>
    </form>
  )
}
