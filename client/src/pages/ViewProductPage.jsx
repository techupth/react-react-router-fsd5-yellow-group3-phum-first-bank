import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewProductPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const results = await axios.get(
      "http://localhost:4001/products/" + param.productId
    );
    setName(results.data.data.name);
    setImage(results.data.data.image);
    setPrice(results.data.data.price);
    setDescription(results.data.data.description);
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <img src={image} alt={name} />
        <h2>Product Title: {name}</h2>
        <h2>Price: {price}</h2>
        <p>Content: {description}</p>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
