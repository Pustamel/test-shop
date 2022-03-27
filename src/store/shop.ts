import { createSlice } from '@reduxjs/toolkit'
import { initialStateType, product } from './types'
import { getCookie } from '../utils'
import { thunkGetProducts } from './thunks'

const initialState: initialStateType = {
  products: [],
  basketProducts: [],
}

export const ShopReducer = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    //load products for basket
    loadBasketProducts: state => {
      if (getCookie('basketProducts'))
        return (state = {
          ...state,
          basketProducts: JSON.parse(getCookie('basketProducts') as string),
        })
    },
    addInBasket: (state, action) => {
      const item: product = action.payload
      state = {
        ...state,
        basketProducts: [...state.basketProducts, item],
      }
      const basketProducts = JSON.stringify(state.basketProducts)
      document.cookie = `basketProducts=${basketProducts}`
      return state
    },
    deleteFromBasket: (state, action) => {
      const id = action.payload
      state = {
        ...state,
        basketProducts: [
          ...state.basketProducts.filter(item => item.id !== id),
        ],
      }
      const basketProducts = JSON.stringify(state.basketProducts)
      document.cookie = `basketProducts=${basketProducts}`
      return state
    },
  },
  extraReducers: {
    [thunkGetProducts.fulfilled.type]: (state, action) => {
      const productsPayload: Array<product> = action.payload.items
      return (state = {
        ...state,
        products: productsPayload,
      })
    },
  },
})

export const { loadBasketProducts, addInBasket, deleteFromBasket } =
  ShopReducer.actions
