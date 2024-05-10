import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import { Home } from './index'

describe('when the page is loaded', () => {
  it('the title should be visible', () => {
    const { getByText } = render(<Home />)

    const greetings = getByText('Welcome to Culympics')

    expect(greetings).not.toBeNull()
  })

  it('the explore button should be visible', () => {
    const { getByText } = render(<Home />)

    const greetings = getByText('EXPLORE')

    expect(greetings).not.toBeNull()
  })
})
