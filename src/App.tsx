import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<ProductsPage />} path="/products"></Route>

        {/* </Routes><Route element={</>} path="/products/:id"></Route>*/}
        <Route element={<Cart />} path="/cart"></Route>
      </Routes>
    </>
  );
}

export default App;
