import { useEffect, useState } from "react";


export const ProductCard = ({ id, title, price, image }) => {


  const CART_KEY = "cart_items";
  const getCart = () => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };
  const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cart_updated"));
  };

  const [qty, setQty] = useState(0);

  useEffect(() => {
    const cart = getCart();
    const found = cart.find((c) => c.id === id);
    setQty(found ? found.quantity : 0);
  }, [id]);

  const addToCart = () => {
    const cart = getCart();
    const found = cart.find((c) => c.id === id);
    if (found) {
      found.quantity += 1;
    } else {
      cart.push({
        id,
        title,
        price,
        image,
        quantity: 1,
      });
    }
    saveCart(cart);
    setQty((p) => p + 1);
  };

  const increase = () => {
    const cart = getCart();
    const found = cart.find((c) => c.id === id);
    if (found) {
      found.quantity += 1;
      saveCart(cart);
      setQty(found.quantity);
    } else {
      addToCart();
    }
  };

  const decrease = () => {
    const cart = getCart();
    const found = cart.find((c) => c.id === id);
    if (!found) return;
    if (found.quantity <= 1) {
      const newCart = cart.filter((c) => c.id !== id);
      saveCart(newCart);
      setQty(0);
    } else {
      found.quantity -= 1;
      saveCart(cart);
      setQty(found.quantity);
    }
  };

  return (
    <div 
      id={`product-${id}`}
      className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col"
    >
      <div className="bg-gray-50 flex items-center justify-center p-8 rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="max-h-32 object-contain"
        />
      </div>
      <div className="p-4 flex flex-col justify-between grow">
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-orange-600 font-bold">${price}</p>
        </div>

        {qty === 0 ? (
          <button
            onClick={addToCart}
            className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition mt-4"
          >
            <i className="fas fa-cart-plus"></i>
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="mt-4 w-full flex items-center justify-center gap-3">
            <button
              onClick={decrease}
              className="cursor-pointer w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-lg font-bold flex items-center justify-center"
            >
              −
            </button>
            <span className="text-gray-700 font-medium px-4">{qty}</span>
            <button
              onClick={increase}
              className="cursor-pointer w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-lg font-bold flex items-center justify-center"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
