import { useEffect, useState } from "react";
import { Link } from "react-router";

export const Home = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const ids = [1, 5, 7, 8, 9, 11, 12, 14];
        const filtered = data.filter((item) => ids.includes(item.id));
        setFeatured(filtered);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <main className="pt-20 pb-32 bg-orange-50 text-right font-sans">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/56/87/18/getlstd-property-photo.jpg?w=900&h=-1&s=1"
            alt="فروشگاه مدرن"
            className="rounded-xl w-full md:w-1/2 object-cover"
          />
          <div className="md:w-1/2 text-orange-700">
            <h1 className="text-3xl font-extrabold mb-4">به فروشگاه ما خوش آمدید</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              ما بهترین محصولات را با ارسال سریع و پشتیبانی کامل ارائه می‌دهیم. تجربه‌ای متفاوت از خرید آنلاین را با ما تجربه کنید.
            </p>
            <a
              href="#products"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
            >
              مشاهده محصولات
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-orange-600 mb-6">محصولات ویژه</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <Link
              key={item.id}
              to="/products"
              className="bg-white rounded-xl shadow hover:shadow-lg transition block"
            >
              <div className="bg-gray-50 flex items-center justify-center p-6 rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-32 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-orange-600 font-bold">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">درباره ما</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://fendco.net/hubfs/about%20us.jpg"
            alt="تیم فروشگاه"
            className="w-full md:w-1/2 rounded-xl object-cover"
          />
          <p className="md:w-1/2">
            فروشگاه ما با هدف ارائه‌ی محصولات با کیفیت و خدمات مشتری‌مدار راه‌اندازی شده است. ما به رضایت شما اهمیت می‌دهیم و تلاش می‌کنیم تجربه‌ای لذت‌بخش از خرید برایتان فراهم کنیم.
          </p>
        </div>
      </section>
    </main>
  );
};
