import { useAppSelector } from '../../store/store'
import { BasketProducts } from '../../components/basketProducts/BasketProducts'
import { EmptyBasket } from '../../components/emptyBasket/EmptyBasket'

export const Basket = () => {
  const state = useAppSelector(state1 => state1.shop)

  return (
    <>{state.basketProducts.length ? <BasketProducts /> : <EmptyBasket />}</>
  )
}
