import "./Cart.css"
import CartItem from "./CartItem"
import PropTypes from "prop-types"
import OffCanvas from "../UI/OffCanvas"
import { useContext } from "react"
import { CartContext } from "../context/CartProvider"


const Cart = ({ hideCartHandler }) => {
    const { cartItems, totalPrice, clearCartItems } = useContext(CartContext)

    const Ren_cartItems = cartItems.map((item, i) => <CartItem key={i} item={item} />)


    return (
        <OffCanvas onClose={hideCartHandler}>
            <div className="cart-head">
                <h2>Sepetim</h2>
                <a className="cart-close" href="#" onClick={hideCartHandler}>X</a>
            </div>
            <ul className="cart-items">
                {Ren_cartItems}
            </ul>
            <div className="total">
                <span>Toplam Değer</span>
                <span>{parseFloat(totalPrice).toFixed(2)}₺</span>
            </div>
            <div className="actions">
                <button className="cart-order">Sipariş Ver</button>
                <button className="cart-clear" onClick={clearCartItems}>Temizle</button>
            </div>
        </OffCanvas>
    )
}


Cart.propTypes = {
    hideCartHandler: PropTypes.func
}
export default Cart