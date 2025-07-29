import { createBrowserRouter } from "react-router";
import Home from "../Pages/Header/pages/Home/Home";
import Main from "../Main/Main";
import Contact from "../Pages/Contact";
import Product from "../product/Product";
import ProductDetails from "../product/ProductDetails";
import About from "../Pages/Header/pages/About";
import Cart from "../Pages/Header/pages/Cart";
import SignUp from "../Pages/Header/pages/signup/SignUp";

 const router = createBrowserRouter([
    {
        path:"/",
        Component: Main,
        children:[
            {index:true, Component: Home},
            {path:"product", Component: Product},
            {path:"product/:id", Component: ProductDetails},
            {path:"/cart", Component: Cart},
            {path:"/about", Component: About},
            {path:"/signup",Component:SignUp}
        ]
    }
])
 
export default router