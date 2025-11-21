import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { increaseItem, decreaseItem, removeItem, clearCart } from "../redux/slices/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const totalPrice = cartItems.reduce(
    (sum, it) => sum + Number(it.price) * Number(it.quantity),
    0
  );

  const confirmOrder = async () => {
    if (cartItems.length === 0) {
      await Swal.fire({
        icon: "info",
        title: "سبد خرید خالی است",
        confirmButtonText: "باشه",
      });
      return;
    }
    await Swal.fire({
      icon: "success",
      title: "سفارش ثبت شد",
      text: "با تشکر از خرید شما",
      confirmButtonText: "باشه",
    });
    dispatch(clearCart());
  };

  return (
    <main className="pt-24 pb-32 bg-orange-50 text-right font-sans">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-orange-600 mb-8 text-center">
          سبد خرید ({totalQuantity} آیتم)
        </h1>

        <div className="space-y-6">
          {cartItems.length === 0 && (
            <div className="bg-white rounded-xl shadow p-6 text-center text-gray-600">
              سبد خرید شما خالی است
            </div>
          )}

          {cartItems.map((it) => (
            <div
              key={it.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="grow w-full sm:w-auto text-right">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {it.title}
                </h3>
                <p className="text-orange-600 font-bold mb-4">
                  ${Number(it.price).toFixed(2)}
                </p>

                <div className="flex items-center justify-start gap-4">
                  <button
                    onClick={() => dispatch(increaseItem(it.id))}
                    className="cursor-pointer w-8 h-8 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-lg font-bold"
                  >
                    +
                  </button>
                  <span className="text-gray-700 font-medium">{it.quantity}</span>
                  <button
                    onClick={() => dispatch(decreaseItem(it.id))}
                    className="cursor-pointer w-8 h-8 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition text-lg font-bold"
                  >
                    −
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(it.id))}
                    className="cursor-pointer ml-auto text-red-500 hover:text-red-600 transition text-xl"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow p-6 text-center">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            جمع کل:{" "}
            <span className="text-orange-600 font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
          <button
            onClick={confirmOrder}
            className="cursor-pointer w-full py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
          >
            تأیید سبد خرید
          </button>
        </div>
      </section>
    </main>
  );
};
