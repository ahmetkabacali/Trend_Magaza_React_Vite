import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";
import PropTypes from "prop-types"

const Header = ({ showCartHandler }) => {
  return (
    <header className="header">
      <h1>Trend Mağaza</h1>
      <HeaderCartButton showCartHandler={showCartHandler} />
    </header>
  );
};

Header.propTypes = {
  showCartHandler: PropTypes.func
}

export default Header;
