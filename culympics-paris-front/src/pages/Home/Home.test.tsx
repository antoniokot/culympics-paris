import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import { Home } from './index'

describe('when the page is loaded', () => {
  it('the title is visible', () => {
    render(<Home />)

    const greetings = screen.getByText('Welcome to Culympics')

    expect(greetings).not.toBeNull()
  })
})
