import basket from '../../assets/icons/delete.svg'
import { useAppDispatch, useAppSelector } from '../../store/store'
import './BasketProducts.css'
import { deleteFromBasket } from '../../store/shop'

export const BasketProducts = () => {
  const basketProducts = useAppSelector(state => state.shop.basketProducts)
  const dispatch = useAppDispatch()

  const getResultPrice = () => {
    const initialPrice = 0
    return basketProducts.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
        initialPrice,
    )
  }

  const onDeleteProduct = (id: number) => {
    dispatch(deleteFromBasket(id))
  }

  return (
    <div className="basket">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head__tr">
            <th>Название</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {basketProducts.map(item => {
            return (
              <tr key={item.id} className="table__body__tr">
                <td>{item.name}</td>
                <td>{item.price} р.</td>
                <td>
                  <button
                    onClick={() => onDeleteProduct(item.id)}
                    className="tr__btn"
                  >
                    <p>Убрать</p>
                    <img src={basket} alt="" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="basket__result-price">Итого: {getResultPrice()} р.</p>
    </div>
  )
}
