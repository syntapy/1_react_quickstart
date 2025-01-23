import { render, cleanup, within, screen, act } from '@testing-library/react'
import { beforeEach, afterEach, describe, expect, test } from 'vitest'

import FilterableProductTable from './FilterableProductTable'
import { searchDebounceTime } from '../../utils'

import userEvent from '@testing-library/user-event'

describe("Number data rows", () => {
  let user: UserEvent, tableBody: HTMLElement

  beforeEach(async () => {
    user = userEvent.setup()
    render(<FilterableProductTable />)
    tableBody = await screen.findByTestId("table-body")
  })

  afterEach(() => cleanup())

  test('All data', async () => {
    let rows = within(tableBody).getAllByRole('row')
    expect(rows.length).toBeGreaterThan(10)
  })

  test('Apples only', async () => {
    const searchBox = await screen.findByRole('searchbox')

    await act(async () => {
      await user.click(searchBox)
      await user.type(searchBox, "Apples")
      await new Promise(resolve => setTimeout(resolve, searchDebounceTime + 100))
    })

    let rows = within(tableBody).getAllByRole('row')

    expect(rows).toHaveLength(2)
  })
})
