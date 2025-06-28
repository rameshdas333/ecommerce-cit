
import Navbar from '../Pages/Header/Navbar/Navbar';
import Footer from '../Foooter/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

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