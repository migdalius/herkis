import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BakeryList from "./pages/home/BakeryList";
import BakeryDetails from "./pages/home/BakeryDetails";
import ProductDetails from "./pages/home/ProductDetails";
import MyAccount from "./pages/admin/MyAccount";
import MyReservation from "./pages/admin/MyReservation";

import MyShopping from "./pages/admin/MyShopping";
import MySetting from "./pages/admin/MySetting";
import OrderList from "./pages/admin/OrderList";
import AddOrder from "./pages/admin/AddOrder";
import ProductList from "./pages/admin/ProductList";
import AddProduct from "./pages/admin/AddProduct";
import CompanyAdress from "./pages/admin/CompanyAdress";
import Login from "./pages/home/Login";
import Register from "./pages/home/Register";

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
        {
          path: "/moje-konto/rezerwacje",
          element: <MyReservation />,
        },
        {
          path: "/moje-konto/zakupy",
          element: <MyShopping />,
        },
        {
          path: "/moje-konto/ustawienia-konta",
          element: <MySetting />,
        },
        {
          path: "/moje-konto/piekarnia/lista-zamowien",
          element: <OrderList />,
        },
        {
          path: "/moje-konto/piekarnia/dodaj-zamowienie",
          element: <AddOrder />,
        },
        {
          path: "/moje-konto/piekarnia/lista-produktow",
          element: <ProductList />,
        },
        {
          path: "/moje-konto/piekarnia/dodaj-produkt",
          element: <AddProduct />,
        },
        {
          path: "/moje-konto/piekarnia/dane-piekarni",
          element: <CompanyAdress />,
        },
        {
          path: "/logowanie",
          element: <Login />,
        },
        {
          path: "/rejestracja",
          element: <Register />,
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
