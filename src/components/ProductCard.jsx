import { useSelector, useDispatch } from "react-redux";
import { addItem, increaseItem, decreaseItem } from "../redux/slices/cartSlice";

export const ProductCard = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const found = cartItems.find((c) => c.id === id);
  const qty = found ? found.quantity : 0;

  return (
    <div
      id={`product-${id}`}
      className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col"
    >
      <div className="bg-gray-50 flex items-center justify-center p-8 rounded-t-xl">
        <img src={image} alt={title} className="max-h-32 object-contain" />
      </div>
      <div className="p-4 flex flex-col justify-between grow">
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-orange-600 font-bold">${price}</p>
        </div>

        {qty === 0 ? (
          <button
            onClick={() => dispatch(addItem({ id, title, price, image }))}
            className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition mt-4"
          >
            <i className="fas fa-cart-plus"></i>
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="mt-4 w-full flex items-center justify-center gap-3">
            <button
              onClick={() => dispatch(decreaseItem(id))}
              className="cursor-pointer w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-lg font-bold flex items-center justify-center"
            >
              −
            </button>
            <span className="text-gray-700 font-medium px-4">{qty}</span>
            <button
              onClick={() => dispatch(increaseItem(id))}
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
