import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://appevent.ru/dev/task1/catalog'
export const thunkGetProducts = createAsyncThunk(
  'getProducts',
  async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      })
      return response.json()
    } catch (error) {
        console.log('error with get products', error)
    }
  },
)
