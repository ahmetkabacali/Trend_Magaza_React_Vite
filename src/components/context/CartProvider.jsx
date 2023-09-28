import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    cartItems: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const { IsExistingItem, addedToCart } = action
            if (action.IsExistingItem !== -1) {// Eğer ürün sepette varsa, miktarını güncelle
                let updatedCartItems = [...state.cartItems]
                updatedCartItems[IsExistingItem] = {
                    ...state.cartItems[IsExistingItem],
                    amount: state.cartItems[IsExistingItem].amount + addedToCart.amount
                }
                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalAmount: state.totalAmount + (action.addedToCart.price * action.addedToCart.amount),
                };
            } else {// Eğer ürün sepette yoksa, yeni bir öğe olarak ekle
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.addedToCart],
                    totalAmount: state.totalAmount + action.addedToCart.price * action.addedToCart.amount,
                };
            }
        case "REMOVE":
            const updatedCartItem = state.cartItems.filter((item) => item.id !== action.cartItemId)
            const itemToRemove = state.cartItems.find((item) => item.id === action.cartItemId)
            return {
                cartItems: updatedCartItem,
                totalAmount: state.totalAmount - (itemToRemove.amount * itemToRemove.price)
            }
        case "CLEAR":
            return {
                ...state, ...initialState
            }
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

    const addItem = (addedToCart) => {
        const IsExistingItem = cartState.cartItems.findIndex((item) => item.id === addedToCart.id)
        cartDispatch({ type: "ADD", addedToCart, IsExistingItem });
    };

    const removeCartItem = (cartItemId) => {
        cartDispatch({ type: "REMOVE", cartItemId })
    }
    const clearCartItems = () => {
        cartDispatch({ type: "CLEAR" })
    }

    const values = {
        cartItems: cartState.cartItems,
        totalPrice: cartState.totalAmount,
        addItem,
        removeCartItem,
        clearCartItems
    };
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = { children: PropTypes.node.isRequired };
export default CartProvider;
export { CartContext };
