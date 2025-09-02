import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Product from "../product/Product";
import ProductDetails from "../product/ProductDetails";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import BillingDetails from "../billingdetails/BillingDetails";
import ErrorPage from "../errorpage/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/Signup";

 const router = createBrowserRouter([
    {
        path:"/",
        Component: Main,
        children:[
            {index:true, Component:Home},
            {path:"product", Component: Product},
            {path:"product/:id", Component: ProductDetails},
            {path:"/cart", Component: Cart},
            {path:"/about", Component: About},
            {path:"/signup",Component:SignUp},
            {path:"/loginpage",Component:LoginPage},
            {path:"/billingdetails",Component:BillingDetails},
            {path:"*",Component:ErrorPage},
          
        ]
    }
])
 
export default router