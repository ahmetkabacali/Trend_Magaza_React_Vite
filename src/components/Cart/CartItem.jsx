import { useContext } from "react";
import "./CartItem.css"
import PropTypes from 'prop-types';
import { CartContext } from "../context/CartProvider";

const CartItem = ({ item }) => {
    const { name, img, price, amount } = item
    const { removeCartItem } = useContext(CartContext)

    return (
        <li className="cart-item">
            <div className="cart-item-img">
                <img src={img} alt={name} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-texts">
                    <b>{name}</b>
                    <div>
                        <span className="cart-item-amount" >{amount}x </span>
                        <span>{parseFloat(price).toFixed(2)}₺</span>
                    </div>

                </div>
                <a href="/" className='cart-item-remove' onClick={(e) => { removeCartItem(item.id); e.preventDefault(); }}>X</a>
            </div>
        </li>)
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem