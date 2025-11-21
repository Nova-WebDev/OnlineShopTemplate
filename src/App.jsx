import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store"; 
import { router } from "./routes";

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
