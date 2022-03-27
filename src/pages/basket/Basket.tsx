import { useAppSelector } from '../../store/store'
import { BasketProducts } from '../../components/basketProducts/BasketProducts'
import { EmptyBasket } from '../../components/emptyBasket/EmptyBasket'

export const Basket = () => {
  const basketProducts = useAppSelector(state => state.shop.basketProducts)

  return (
    <>{basketProducts.length ? <BasketProducts /> : <EmptyBasket />}</>
  )
}
