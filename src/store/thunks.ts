import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://appevent.ru/dev/task1/catalog'
export const thunkGetProducts = createAsyncThunk(
  'getProducts',
  async (props, thunkAPI) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      })
      return response.json()
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить товары')
    }
  },
)
