import "./Products.css"
import products from "../../productDataYerel"
import ProductItem from "./ProductItem"


const Products = () => {
  const renProductList = products.map((product) => <ProductItem key={product.id} product={product} />)

  return (
    <main className="products-wrapper">
      <ul className="products">{renProductList}</ul>
      <button className="button" >Fetch Products</button>
    </main>
  )
}

export default Products