import { createBrowserRouter } from "react-router";
import Home from "../Pages/Header/pages/Home/Home";
import Main from "../Main/Main";
import Contact from "../Pages/Contact";
import Product from "../product/Product";
import ProductDetails from "../product/ProductDetails";

 const router = createBrowserRouter([
    {
        path:"/",
        Component: Main,
        children:[
            {index:true, Component: Home},
            {path:"product", Component: Product},
            {path:"product/:Id", Component: ProductDetails},
        ]
    }
])
 
export default router