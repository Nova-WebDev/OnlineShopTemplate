import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { CartDropdown } from "./CartDropdown";

export const Navbar = () => {
  const CART_KEY = "cart_items";
  const getCart = () => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const totalQty = cart.reduce((s, it) => s + it.quantity, 0);

  const toggleCart = () => {
    if (cart.length === 0) {
      alert("سبد خرید شما خالی است");
      return;
    }
    setOpen((p) => !p);
  };

  return (
    <nav className="from-orange-100 via-white to-orange-50 shadow-sm border-b border-orange-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-3xl font-extrabold text-orange-500 tracking-tight">LOGO</div>

          <div className="hidden md:flex flex-row-reverse gap-6 text-gray-700 text-base font-medium">
            <NavLink to="/" end>خانه</NavLink>
            <NavLink to="/products">محصولات</NavLink>
            <NavLink to="/about">درباره ما</NavLink>
            <NavLink to="/contact">تماس</NavLink>
          </div>

          <div className="relative">
            <button onClick={toggleCart} className="relative cursor-pointer">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute -top-3 -right-3 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {totalQty}
              </span>
            </button>
            {open && (
              <CartDropdown cart={cart} setCart={setCart} onClose={() => setOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
