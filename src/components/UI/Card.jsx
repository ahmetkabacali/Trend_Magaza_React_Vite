import "./Card.css"
import PropTypes from "prop-types"

const Card = ({ children, className }) => {
    return (
        <li className={`card ${className}`}>
            {children}
        </li>
    )
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Card