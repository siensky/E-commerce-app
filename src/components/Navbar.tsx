import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" flex justify-between text-[#FFFFFF] items-center bg-[#3b82f6] p-[1.5rem]">
      <h2 className="text-2xl">BestTech</h2>
      <ul className="flex  gap-[1.5rem] [text-decoration:none] list-none pl-0">
        <li>
          <Link className="text-[#FFFFFF] [text-decoration:none]" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-[#FFFFFF] [text-decoration:none]"
            to="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link className="text-[#FFFFFF] [text-decoration:none]" to="/cart">
            Cart (0)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
