import { render, screen } from '@testing-library/react'
import { expect, describe, it, beforeAll } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

import { Home } from './index'

describe('when the page is loaded', () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )
  })

  it('the title should be visible', () => {
    const greetings = screen.getByText('Welcome to Culympics')
    expect(greetings).not.toBeNull()
  })

  it('the explore button should be visible', () => {
    const exploreButton = screen.getByText('EXPLORE')
    expect(exploreButton).not.toBeNull()
  })
})
