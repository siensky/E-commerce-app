import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      await fetch("https://play-ecom-api.allcodeapp.com/api/products").then(
        async (data) => {
          const response = await data.json();
          setProducts(response);
        }
      );
    }

    fetchProducts();
  }, []);
  return (
    <>
      <div className="p-[30px]">
        <h1 className="text-2xl">Products </h1>
        <div className="grid grid-cols-5 gap-[30px]">
          {products.map((product, index) => (
            <ProductCard product={product} key={index}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <div className="flex flex-col justify-between gap-[20px] p-[20px] bg-[#808080] rounded-[10px]">
      <img
        src={product.imgUrl}
        className="w-full h-[10rem] object-cover"
        alt=""
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>Rating:{product.rating} / 5</p>
      <Link
        to={"/product/" + product.id}
        className="p-[10px] bg-[#3b82f6] text-[#FFFFFF] rounded-[10px]"
      >
        View Product
      </Link>
    </div>
  );
}

export default ProductsPage;
