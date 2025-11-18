import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import CartContext from "./context/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext value={[cart, setCart]}>
        <Navbar></Navbar>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<ProductsPage />} path="/products"></Route>
          <Route element={<ProductPage />} path="/product/:id"></Route>
          <Route element={<Cart />} path="/cart"></Route>
        </Routes>
      </CartContext>
    </>
  );
}

export default App;
