import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Catalog } from './pages/catalog/Catalog'
import { Basket } from './pages/basket/Basket'
import { useAppDispatch, useAppSelector } from './store/store'
import basket from './assets/icons/basket.svg'
import { loadBasketProducts } from './store/shop'
import { thunkGetProducts } from './store/thunks'

function App() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state1 => state1.shop)

  useEffect(() => {
    dispatch(thunkGetProducts())
    dispatch(loadBasketProducts())
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__links">
          <Link to="catalog">Каталог</Link>
          <Link className="app__links__basket" to="basket">
            Корзина
            <img className="app__links__basket_img" src={basket} alt="" />
            <span className="count-products-in-basket">
              {state.basketProducts.length}
            </span>
          </Link>
        </div>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
