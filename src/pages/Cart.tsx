import { useContext } from "react";
import CartContext from "../context/CartContext";
function Cart() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="mx-[20px] my-[20px]">
      <h1 className="text-4xl mb-[20px] font-semibold">Cart</h1>
      <div className="flex flex-col p-[20px] gap-[20px] m-[20px] bg-[#808080] rounded-[10px]">
        {cart.length === 0 ? "Your cart is empty" : null}
        {cart.map((cartItem, index) => (
          <div className="flex  gap-[20px]">
            <img
              src={cartItem.imgUrl}
              className="w-[10%] h-[5rem] object-cover"
              alt=""
            />
            <div>
              <h3 className="text-2xl">{cartItem.name}</h3>
              <button className="text-[#FF0000] underline">Remove</button>
            </div>
          </div>
        ))}
        {cart.length > 0 ? (
          <button className="rounded-[20px] text-center">Checkout</button>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
