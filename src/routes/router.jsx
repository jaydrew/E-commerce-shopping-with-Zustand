import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import OrderConfirm from "../pages/OrderConfirm";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            {
                path: "my-cart",
                element: <MyCart />,
            },
            {
                path: "product-detail/:productSlug",
                element: <ProductDetail />,
            },
            {
                path: "order-confirm", 
                element: <OrderConfirm />
            },
        ],
    }
]);

export default router;