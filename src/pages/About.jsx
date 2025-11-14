export const About = () => {
  return (
    <main className="pt-24 pb-32 bg-orange-50 text-right font-sans">
      
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://fendco.net/hubfs/about%20us.jpg"
            alt="تیم فروشگاه"
            className="w-full md:w-1/2 rounded-xl object-cover shadow"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-extrabold text-orange-600 mb-4">درباره ما</h1>
            <p className="text-gray-700 leading-relaxed text-base">
              فروشگاه ما با هدف ارائه‌ی محصولات با کیفیت، قیمت مناسب و تجربه‌ای لذت‌بخش از خرید آنلاین راه‌اندازی شده است. ما به رضایت مشتریان خود افتخار می‌کنیم و همواره در تلاشیم تا خدماتی فراتر از انتظار ارائه دهیم.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-10 text-center">چرا ما را انتخاب کنید؟</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <i className="fas fa-shipping-fast text-3xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">ارسال سریع</h3>
            <p className="text-sm text-gray-600 leading-relaxed">تحویل سریع و مطمئن به سراسر کشور در کمترین زمان ممکن.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <i className="fas fa-headset text-3xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">پشتیبانی ۲۴ ساعته</h3>
            <p className="text-sm text-gray-600 leading-relaxed">تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شماست.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <i className="fas fa-thumbs-up text-3xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">رضایت مشتری</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ما به رضایت شما متعهدیم و همیشه در کنار شما خواهیم بود.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
