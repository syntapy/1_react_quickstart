import React from 'react'

import FilterableProductTable from './FilterableProductTable'
import { beforeEach, afterEach, describe, it, expect, test } from 'vitest'

import { render, fireEvent, screen } from '@testing-library/react'

test('Enter data in search field', () => {
  render(<FilterableProductTable />)
})
