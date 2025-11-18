import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import CartContext from "../context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    async function fetchProduct() {
      await fetch(
        "https://play-ecom-api.allcodeapp.com/api/products/" + id
      ).then(async (data) => {
        const response = await data.json();
        setProduct(response);
      });
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="flex p-[20px] gap-[20px] m-[20px] bg-[#808080] rounded-[10px]">
        <img src={product.imgUrl} className="w-[40%] object-cover" alt="" />
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-semibold text-[40px]">{product.name}</h1>
          <p>{product.description}</p>
          <b>rating: {product.rating} /5</b>
          <button onClick={addToCart} className="p-[20px] rounded-[10px]">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
