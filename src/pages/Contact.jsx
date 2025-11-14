export const Contact = () => {
  return (
    <main className="pt-24 pb-32 bg-orange-50 text-right font-sans">
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-3xl font-extrabold text-orange-600 mb-4">تماس با ما</h1>
        <p className="text-gray-700 text-base leading-relaxed">
          اگر سوالی دارید یا نیاز به راهنمایی دارید، خوشحال می‌شویم با ما در ارتباط باشید.
        </p>
      </section>

      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <i className="fas fa-phone-alt text-2xl text-orange-500 mb-3"></i>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">تلفن</h3>
          <p className="text-sm text-gray-600">""</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <i className="fas fa-envelope text-2xl text-orange-500 mb-3"></i>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">ایمیل</h3>
          <p className="text-sm text-gray-600">""</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <i className="fas fa-map-marker-alt text-2xl text-orange-500 mb-3"></i>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">آدرس</h3>
          <p className="text-sm text-gray-600">""</p>
        </div>
      </section>

      
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">نام</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="نام شما"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="ایمیل شما"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">پیام</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="متن پیام شما"
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
          >
            ارسال پیام
          </button>
        </form>
      </section>
    </main>
  );
};
