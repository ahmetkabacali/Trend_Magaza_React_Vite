import { useState } from "react";
import "./FormInputs.css";

const FormInputs = () => {
  const initialValues = { title: "", price: "", image: "", category: "", amount: 1 };
  const [inputValues, setInputValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, category, ...rest } = inputValues;
    const newData = {
      ...rest,
      name: title, // title'ı name olarak değiştir
      description: category,
    };
    try {
      await fetch("http://localhost:3004/products/", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required onChange={handleInputChange} value={inputValues.title} />
      </div>
      <div className="form-item">
        <label htmlFor="price">Price</label>
        <input id="price" type="number" required name="price" onChange={handleInputChange} value={inputValues.price} />
      </div>
      <div className="form-item">
        <label htmlFor="category">Category</label>
        <input id="category" type="text" name="category" required onChange={handleInputChange} value={inputValues.category} />
      </div>
      <div className="form-item">
        <label htmlFor="img">Image Url</label>
        <input id="img" type="text" name="image" required onChange={handleInputChange} value={inputValues.image} />
      </div>
      <button className="button">Add Product</button>
    </form>
  );
};

export default FormInputs;
