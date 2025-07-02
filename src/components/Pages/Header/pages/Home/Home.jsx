import React from 'react';
import Header from '../../Header';
import Navbar from '../../Navbar/Navbar';
import Banner from '../../../../Banner/Banner';
import Category from '../../../../category/category';
import BestSellingProduct from '../../../../BestSellingProduct/BestSellingProduct';
import MusicExperience from '../../../../MusicExperience/MusicExperience';

import NewArrival from '../../../../NewArrival/NewArrival';
import OurProducts from '../../../../OurProducts/OurProducts';






const Home = () => {
    return (
        <div>
      
        <Banner/>
        <Category/>
        <BestSellingProduct/>
        <MusicExperience/>
        <OurProducts/>
        <NewArrival/>
        
      
        
       
        </div>
    );
};

export default Home;