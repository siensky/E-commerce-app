import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsPage from "./ProductsPage";

function HomePage() {
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    async function fetchFeaturedProduct() {
      await fetch("https://play-ecom-api.allcodeapp.com/api/featured").then(
        async (data) => {
          const response: any = await data.json();
          setFeatured(response);
        }
      );
    }
    fetchFeaturedProduct();
  }, []);
  return (
    <>
      <main>
        <header className="h-[25rem] w-screen relative">
          <img
            src={featured.bannerUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
          <div className="flex text-center justify-center items-center absolute h-[25rem] w-screen inset-0 bg-[#808080]/60 z-10">
            <div className="flex gap-[15px] items-center flex-col">
              <h1 className="relative z-20 p-4 text-[#FFFFFF]">
                {featured.promoTitle}
              </h1>
              <Link
                className="bg-[#FFFFFF] p-[20px] text-[#000000] w-[20%] rounded-[20px] [text-decoration:none]"
                to={"/product/" + featured.id}
              >
                View Prdouct
              </Link>
            </div>
          </div>
        </header>
        <ProductsPage></ProductsPage>
      </main>
    </>
  );
}

export default HomePage;
