import PropTypes from 'prop-types';
import "./ProductItem.css"
import Rating from './Rating';
import Card from '../UI/Card';
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';


const ProductItem = ({ product }) => {
    const { name, description, image: img, price } = product
    const { addItem } = useContext(CartContext)

    return (
        <Card >
            <img src={img} alt={name} />
            <div>
                <h3 className='production-title'>{name}</h3>
                <p>{description}</p>
                <div className='product-info'>
                    <Rating />
                    <span className='price'>{price}₺</span>
                </div>
            </div>
            <button className='add-to-cart' onClick={() => addItem(product)}>Sepete Ekle</button>
        </Card>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object
}
export default ProductItem