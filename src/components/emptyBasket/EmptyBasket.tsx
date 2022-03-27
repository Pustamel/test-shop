import basketWithStick from '../../assets/icons/basket-with-stick.svg'
import './EmptyBasket.css'
import { Link } from 'react-router-dom'

export const EmptyBasket = () => {
  return (
    <div className="emptyBasket">
      <p className="emptyBasket__msg">
        У-упс! Ваша корзина пуста. Перейдите{' '}
        <Link to="/catalog" className="emptyBasket__msg__link">
          в каталог
        </Link>
      </p>
      <img className="emptyBasket__img" src={basketWithStick} alt="" />
    </div>
  )
}
