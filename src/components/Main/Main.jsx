
import Footer from '../Foooter/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Navbar from '../navber/Navber';



const Main = () => {
    return (
        <div>
            <Header/>
           <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;