import './Catalog.css'
import { Button } from '../../UI/button/Button'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { addInBasket } from '../../store/shop'
import { Link } from 'react-router-dom'
import { product } from '../../store/types'

export const Catalog = () => {
  const state = useAppSelector(state1 => state1.shop)
  const dispatch = useAppDispatch()

  const onAddInBasket = (item: product) => {
    dispatch(addInBasket(item))
  }

  return (
    <div className="catalog">
      {state.products.map(item => {
        return (
          <div className="container-product" key={item.id}>
            <img className="container-product__image" src={item.image} alt="" />
            <div className="container-product__info">
              <p className="container-product__info__title">{item.name}</p>
              <p className="container-product__info__price">{item.price} р.</p>

              {state.basketProducts.findIndex(
                product => product.id === item.id,
              ) >= 0 ? (
                <Link className="container-product__info__link" to="/basket">
                  <Button color="blue" text="Оформить заказ" />
                </Link>
              ) : (
                <Button
                  onClick={() => onAddInBasket(item)}
                  text="Добавить в корзину"
                />
              )}

            </div>
          </div>
        )
      })}
    </div>
  )
}
