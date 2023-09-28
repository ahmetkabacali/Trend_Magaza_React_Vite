import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"
import PropTypes from "prop-types"
import { CartContext } from "../context/CartProvider";


const HeaderCartButton = ({ showCartHandler }) => {
    const { cartItems } = useContext(CartContext)
    
    const totalItemsInCart = cartItems.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
    }, 0); 


    return (
        <button className="button" onClick={showCartHandler}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Sepetim</span>

            <span className="badge">{totalItemsInCart}</span>
        </button>
    );
};
HeaderCartButton.propTypes = {
    showCartHandler: PropTypes.func
}
export default HeaderCartButton;
