import React from 'react';
import Header from '../../Header';
import Navbar from '../../Navbar/Navbar';
import Banner from '../../../../Banner/Banner';
import Category from '../../../../category/category';
import BestSellingProduct from '../../../../BestSellingProduct/BestSellingProduct';
import MusicExperience from '../../../../MusicExperience/MusicExperience';
import OurProducts from '../../../../OurProducts/OurProducts';
import NewArrival from '../../../../NewArrival/NewArrival';
import Footer from '../../../../Foooter/Footer';




const Home = () => {
    return (
        <div>
        <Header/>
        <Navbar/>
        <Banner/>
        <Category/>
        <BestSellingProduct/>
        <MusicExperience/>
        <OurProducts/>
        <NewArrival/>
        <Footer/>
      
        
       
        </div>
    );
};

export default Home;