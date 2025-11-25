import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/layouts/Layout';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Cart } from '../pages/Cart';
import { Login } from '../pages/auth/Login.jsx';
import { SignUp } from '../pages/auth/SignUp.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
