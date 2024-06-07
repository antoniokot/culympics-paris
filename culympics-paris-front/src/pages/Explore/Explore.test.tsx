import { render, screen } from '@testing-library/react'
import { expect, describe, it, beforeAll } from 'vitest'

import { Explore } from './index'

describe('when the page is loaded', () => {
  beforeAll(() => {
    render(<Explore />)
  })

  it('the most search section should be visible', () => {
    const section = screen.getByText('Most Searched')
    expect(section).not.toBeNull()
  })

  it('the better reviewed section should be visible', () => {
    const section = screen.getByText('Better Reviewed')
    expect(section).not.toBeNull()
  })
})
