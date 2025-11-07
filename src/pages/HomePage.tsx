import { useEffect, useState } from "react";

function HomePage() {
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    async function fetchFeaturedProduct() {
      await fetch("https://play-ecom-api.allcodeapp.com/api/featured").then(
        async (data) => {
          const response: any = await data.json();
          console.log(response);
        }
      );
    }
    fetchFeaturedProduct();
  }, []);
  return (
    <>
      <p></p>
    </>
  );
}

export default HomePage;
