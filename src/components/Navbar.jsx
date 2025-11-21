import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { CartDropdown } from "./CartDropdown";
import Swal from "sweetalert2";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "سبد خرید خالی است",
        text: "لطفاً ابتدا محصولی اضافه کنید",
        confirmButtonText: "باشه",
        confirmButtonColor: "#f97316",
      });
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
              {totalQuantity > 0 && (
                <span className="absolute -top-3 -right-3 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalQuantity}
                </span>
              )}
            </button>

            {open && (
              <CartDropdown cart={cartItems} onClose={() => setOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
