import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router";
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
    <nav className="bg-white shadow-md border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold text-orange-600 tracking-tight">
            LOGO
          </div>

          <div className="hidden md:flex flex-row-reverse gap-8 text-gray-700 text-base font-medium">
            <NavLink to="/" end className="hover:text-orange-600 transition">
              خانه
            </NavLink>
            <NavLink
              to="/products"
              className="hover:text-orange-600 transition"
            >
              محصولات
            </NavLink>
            <NavLink to="/about" className="hover:text-orange-600 transition">
              درباره ما
            </NavLink>
            <NavLink to="/contact" className="hover:text-orange-600 transition">
              تماس
            </NavLink>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition cursor-pointer"
            >
              <i className="fas fa-user text-lg"></i>
              <span className="hidden sm:inline font-medium">ورود</span>
            </Link>

            <div className="relative">
              <button
                onClick={toggleCart}
                className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition cursor-pointer relative"
              >
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="hidden sm:inline font-medium">سبد</span>
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
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
      </div>
    </nav>
  );
};
