import { cleanup, render, screen } from '@testing-library/react'
import { expect, describe, it, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

import { RestaurantCard } from './index'

describe('when the component is loaded', () => {
  afterEach(() => {
    cleanup()
  })

  describe('when the rating is less than 0', () => {
    it('should be an invalid case', () => {
      const fakeRestaurant = {
        name: 'fake_name',
        imageURL: 'fake_image_url',
        address: 'fake_address',
        rating: -0.1,
      }

      render(
        <BrowserRouter>
          <RestaurantCard
            key={fakeRestaurant.name}
            name={fakeRestaurant.name}
            imageURL={fakeRestaurant.imageURL}
            address={fakeRestaurant.address}
            rating={fakeRestaurant.rating}
          />
        </BrowserRouter>,
      )

      const rating: HTMLSpanElement = screen.getByText('stars')
      const numberOfStars = parseFloat(rating.textContent!.split(' ')[0])

      expect(numberOfStars).toBeLessThan(0)
    })
  })

  describe('when the rating is equal 0', () => {
    it('should be a valid case', () => {
      const fakeRestaurant = {
        name: 'fake_name',
        imageURL: 'fake_image_url',
        address: 'fake_address',
        rating: 0,
      }

      render(
        <BrowserRouter>
          <RestaurantCard
            key={fakeRestaurant.name}
            name={fakeRestaurant.name}
            imageURL={fakeRestaurant.imageURL}
            address={fakeRestaurant.address}
            rating={fakeRestaurant.rating}
          />
        </BrowserRouter>,
      )

      const rating: HTMLSpanElement = screen.getByText('stars')
      const numberOfStars = parseFloat(rating.textContent!.split(' ')[0])

      expect(numberOfStars).toEqual(0)
    })
  })

  describe('when the rating is greater than 0 and less than 5', () => {
    it('should be a valid case', () => {
      const fakeRestaurant = {
        name: 'fake_name',
        imageURL: 'fake_image_url',
        address: 'fake_address',
        rating: 2.5,
      }

      render(
        <BrowserRouter>
          <RestaurantCard
            key={fakeRestaurant.name}
            name={fakeRestaurant.name}
            imageURL={fakeRestaurant.imageURL}
            address={fakeRestaurant.address}
            rating={fakeRestaurant.rating}
          />
        </BrowserRouter>,
      )

      const rating: HTMLSpanElement = screen.getByText('stars')
      const numberOfStars = parseFloat(rating.textContent!.split(' ')[0])

      expect(numberOfStars).toBeGreaterThanOrEqual(0)
      expect(numberOfStars).toBeLessThan(5)
    })
  })

  describe('when the rating is equal 5', () => {
    it('should be a valid case', () => {
      const fakeRestaurant = {
        name: 'fake_name',
        imageURL: 'fake_image_url',
        address: 'fake_address',
        rating: 5,
      }

      render(
        <BrowserRouter>
          <RestaurantCard
            key={fakeRestaurant.name}
            name={fakeRestaurant.name}
            imageURL={fakeRestaurant.imageURL}
            address={fakeRestaurant.address}
            rating={fakeRestaurant.rating}
          />
        </BrowserRouter>,
      )

      const rating: HTMLSpanElement = screen.getByText('stars')
      const numberOfStars = parseFloat(rating.textContent!.split(' ')[0])

      expect(numberOfStars).toEqual(5)
    })

    describe('when the rating is greater than 5', () => {
      it('should be an invalid case', () => {
        const fakeRestaurant = {
          name: 'fake_name',
          imageURL: 'fake_image_url',
          address: 'fake_address',
          rating: 5.1,
        }

        render(
          <BrowserRouter>
            <RestaurantCard
              key={fakeRestaurant.name}
              name={fakeRestaurant.name}
              imageURL={fakeRestaurant.imageURL}
              address={fakeRestaurant.address}
              rating={fakeRestaurant.rating}
            />
          </BrowserRouter>,
        )

        const rating: HTMLSpanElement = screen.getByText('stars')
        const numberOfStars = parseFloat(rating.textContent!.split(' ')[0])

        expect(numberOfStars).toBeGreaterThanOrEqual(5)
      })
    })
  })
})
