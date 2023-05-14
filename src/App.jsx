import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BakeryList from "./pages/home/BakeryList";
import BakeryDetails from "./pages/home/BakeryDetails";
import ProductDetails from "./pages/home/ProductDetails";
import MyAccount from "./pages/admin/MyAccount";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/lista-piekarni",
          element: <BakeryList />,
        },
        {
          path: "/lista-piekarni/:id",
          element: <BakeryDetails />,
        },
        {
          path: "/lista-piekarni/:id/produkty/:idProdukt",
          element: <ProductDetails />,
        },
        {
          path: "/moje-konto",
          element: <MyAccount />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
