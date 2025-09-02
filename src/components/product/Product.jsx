import React from 'react';
import BannerLeft from '../BannerLeft.jsx/BannerLeft';
import ProductLeft from './ProductLeft/ProductLeft';
import Container from '../container/Container';
import ProductRight from './ProductRight/ProductRight';

const Product = () => {
    return (
        <div className='mt-20'>
          <Container>
           <div className='flex '>
              <div className='w-[30%]'>
               <ProductLeft/>
            </div>

            <div className='w-[70%]'>

              <ProductRight/>
              
            </div> 
           </div>
          </Container>
        </div>
    );
};

export default Product;