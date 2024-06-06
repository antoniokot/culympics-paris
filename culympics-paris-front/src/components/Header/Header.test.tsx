import { render, screen } from '@testing-library/react'
import { expect, describe, it, beforeAll } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './index'

describe('when the component is loaded', () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
  })

  it('the search bar should be visible', () => {
    const searchBar = screen.getByPlaceholderText(
      'Which restaurant are you looking for today?',
    )
    expect(searchBar).not.toBeNull()
  })

  it('the dropdown should be visible', () => {
    const dropdown = screen.getByText('Restaurants')
    expect(dropdown).not.toBeNull()
  })
})
