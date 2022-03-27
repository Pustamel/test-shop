import {Link} from "react-router-dom";
import basket from "../../assets/icons/basket.svg";
import React from "react";
import {useAppSelector} from "../../store/store";

export const Header = () => {
    const basketProducts = useAppSelector(state => state.shop.basketProducts)
    return  <div className="app__links">
        <Link to="catalog">Каталог</Link>
        <Link className="app__links__basket" to="basket">
            Корзина
            <img className="app__links__basket_img" src={basket} alt="" />
            <span className="count-products-in-basket">
              {basketProducts.length}
            </span>
        </Link>
    </div>
}
