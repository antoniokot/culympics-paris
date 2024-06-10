import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export default {
  async getRestaurants(page = '', size = '', country = '') {
    const query = {
      params: {
        page,
        size,
        country,
      },
    }

    try {
      console.log(`${BASE_URL}/restaurants`)
      const response = await axios.get(`${BASE_URL}/restaurants`, query)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
