import { useState } from "react";
import { Link } from "react-router";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white font-sans">
      <section className="w-full max-w-md px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-700 mb-6 text-center">
            ورود به حساب کاربری
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                ایمیل
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition shadow-md text-sm sm:text-base"
            >
              ورود
            </button>
          </form>

          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 space-y-2">
            <p>
              حساب کاربری ندارید؟{" "}
              <Link
                to="/signup"
                className="text-orange-600 font-semibold hover:underline"
              >
                ثبت‌نام کنید
              </Link>
            </p>
            <p>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition"
              >
                رمز عبور را فراموش کرده‌اید؟
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
