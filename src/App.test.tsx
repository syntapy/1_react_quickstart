import { render, cleanup } from '@testing-library/react'
import { expect, test } from 'vitest'
import axe from 'axe-core'

import App from './App'

test('Accessibility', () => {
  const { container } = render(<App />)

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

  cleanup()
})

