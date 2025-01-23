import React from 'react'

import FilterableProductTable from './FilterableProductTable'
import { expect, test, vi } from 'vitest'
import { searchDebounceTime } from '../../utils'

import axe from 'axe-core'
import { within, render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Accessibility', () => {
  const { container } = render(<FilterableProductTable />)

  const config = {
    rules: {
      'color-contrast': { enabled: false },
      'link-in-text-block': { enabled: false }
    }
  }

  axe.run(container, config, (err, { violations }) => {
    expect(err).toBe(null);
    expect(violations).toHaveLength(0);
  })
})

test('Enter data in search field', async () => {
  //vi.useFakeTimers()
  //const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
  const user = userEvent.setup()

  render(<FilterableProductTable />)

  const searchBox = await screen.findByRole('searchbox')

  await act(async () => {
    await user.click(searchBox)
    await user.type(searchBox, "Apples")
    await new Promise(resolve => setTimeout(resolve, searchDebounceTime + 100))
  })

  //await vi.advanceTimersByTimeAsync(searchDebounceTime+300)

  const tableBody = await screen.findByTestId("table-body")
  const rows = within(tableBody).getAllByRole('row')

  expect(rows).toHaveLength(2)
})
