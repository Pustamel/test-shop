import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Catalog } from './pages/catalog/Catalog'
import { Basket } from './pages/basket/Basket'
import { useAppDispatch } from './store/store'
import { loadBasketProducts } from './store/shop'
import { thunkGetProducts } from './store/thunks'
import {Header} from "./components/header/Header";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(thunkGetProducts())
    dispatch(loadBasketProducts())
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
