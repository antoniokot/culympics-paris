import { render, screen } from '@testing-library/react'
import { expect, describe, it, beforeEach } from 'vitest'

import { Home } from './index'

describe('when the page is loaded', () => {
  // Render the component once before each test
  beforeEach(() => {
    render(<Home />)
  })

  it('the title should be visible', () => {
    const greetings = screen.getByText('Welcome to Culympics')
    expect(greetings).not.toBeNull()
  })

  it('the explore button should be visible', () => {
    const exploreButton = screen.getAllByText('EXPLORE')
    expect(exploreButton[0]).not.toBeNull()
  })
})
