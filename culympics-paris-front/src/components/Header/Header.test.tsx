import { render, screen, fireEvent } from '@testing-library/react'
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

  describe(`when typing a restaurant's name bigger than expected`, () => {
    it('should block the typing', () => {
      const searchBar: HTMLInputElement = screen.getByPlaceholderText(
        'Which restaurant are you looking for today?',
      )

      fireEvent.change(searchBar, {
        target: { value: 'A very long restaurant name that exceeds the limit' },
      })

      expect(searchBar.value.length).toBeGreaterThanOrEqual(30)
    })
  })

  describe(`when typing a restaurant's name with expected length`, () => {
    it('should block the typing', () => {
      const searchBar: HTMLInputElement = screen.getByPlaceholderText(
        'Which restaurant are you looking for today?',
      )

      fireEvent.change(searchBar, {
        target: { value: 'A not long restaurant name' },
      })

      expect(searchBar.value.length).toBeLessThanOrEqual(30)
    })
  })
})
