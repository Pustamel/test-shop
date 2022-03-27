import basket from '../../assets/icons/delete.svg'
import { useAppDispatch, useAppSelector } from '../../store/store'
import './BasketProducts.css'
import { deleteFromBasket } from '../../store/shop'

export const BasketProducts = () => {
  const state = useAppSelector(state1 => state1.shop)
  const dispatch = useAppDispatch()

  const getResultPrice = () => {
    const initialValue = 0
    return state.basketProducts.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      initialValue,
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
            <th> </th>
          </tr>
        </thead>
        <tbody className="table__body">
          {state.basketProducts.map(item => {
            return (
              <tr key={item.id} className="table__body__tr">
                <td>{item.name}</td>
                <td>{item.price} р.</td>
                <td>
                  <button
                    onClick={() => onDeleteProduct(item.id)}
                    className="table__body__tr__btn"
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
