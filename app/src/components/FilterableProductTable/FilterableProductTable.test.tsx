import React from 'react'

import FilterableProductTable from './FilterableProductTable'
import { beforeEach, afterEach, describe, it, expect, test } from 'vitest'

import axe from 'axe-core'
import { render, fireEvent, screen } from '@testing-library/react'
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
  const user = userEvent.setup()
  render(<FilterableProductTable />)

  const searchBox = screen.getByRole('searchbox')
})
