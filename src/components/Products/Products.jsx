import "./Products.css";
import ProductItem from "./ProductItem";
import { useCallback, useEffect, useState } from "react";
import FormInputs from "../Form/FormInputs";
import productsData from "../../productsData.json";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = useCallback(async () => {
    setIsLoading(true); setError(null);
    try {
      const response = await fetch("https://my-pos-application-api.onrender.com/api/products/get-all");
      if (response.status !== 200) {
        throw new Error("Yanlış birşeyler var, muhtemel fetch adresi doğru değil yada servera ulaşılamıyor!");
      }
      const data = await response.json();
      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          description: item.category,
          amount: 1,
          image: item.img,
          ...item,
        };
      });
      // productsData ile fetch verilerini birleştirme
      const combinedData = [...productsData.products, ...newData];
      setProducts(combinedData);
    } catch (error) { setError(error.message); }

    setIsLoading(false);
  }, []);
  useEffect(() => { fetchData(); }, [fetchData]);

  const renProductList = products.map((product) => <ProductItem key={product.id} product={product} />);
  let content = <p>Ürün Bulunamadı!</p>;
  if (products.length > 0) { content = renProductList; }
  if (error) { content = <p>{error}</p>; }
  if (isLoading) { content = <p>LOADING...</p>; }
  return (
    <main className="products-wrapper">
      <FormInputs />
      <ul className="products">{content}</ul>
      <button className="button" onClick={fetchData}>
        Fetch Products
      </button>
    </main>
  );
};

export default Products;
