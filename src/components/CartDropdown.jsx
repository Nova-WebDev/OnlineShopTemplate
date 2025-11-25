import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/slices/cartSlice";

export const CartDropdown = ({ onClose }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);


  if (cartItems.length === 0) {
    onClose();
    return null;
  }

  return (
    <div className="absolute top-12 right-0 w-80 bg-white shadow-lg rounded-xl border border-orange-200 p-4 z-50">
      <h3 className="text-orange-600 font-bold mb-3 text-center">خلاصه سفارش</h3>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 border-b pb-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="flex-1 text-right">
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-600">
                {item.quantity} × ${Number(item.price).toFixed(2)}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => dispatch(increaseItem(item.id))}
                  className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-sm font-bold cursor-pointer"
                >
                  +
                </button>
                <span className="text-gray-700 text-sm">{item.quantity}</span>
                <button
                  onClick={() => dispatch(decreaseItem(item.id))}
                  className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-sm font-bold cursor-pointer"
                >
                  −
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink
        to="/cart"
        onClick={onClose}
        className="mt-4 block text-center py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition cursor-pointer"
      >
        مشاهده جزئیات بیشتر
      </NavLink>
    </div>
  );
};
