import React, { useEffect, useState } from 'react';
import ProductLeft from '../ProductLeft/ProductLeft';
import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';

const ProductRight = () => {
    const [productData,setProductData] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProductData(data.products))
    },[])
    console.log(productData)
    return (
        <div className='grid grid-cols-3 gap-[30px]'>
            {
               productData.map((product, idx) => (
                     
                         <div key={idx}  className=" gap-[30px]">
                             
                                 <div className="bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]">
                                   <img src={product.thumbnail} alt="" />
                                   <div className="absolute top-3 flex flex-col gap-2  right-3">
                                     <div className="flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]">
                                       <GoHeart />
                                     </div>
                                     <div className="flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]">
                                       <IoEyeOutline />
                                     </div>
                                   </div>
                                 </div>
                                 <p className="pt-4 pb-2 font-primary font-medium text-base">
                                   {product.name}
                                 </p>
                                 <div className="flex items-center gap-2 ">
                                   <p className="font-primary font-medium text-base text-primary1">
                                     ${product.price}
                                   </p>
                                     <div className='flex items-center'>
                                   {[...Array(5)].map((_, starIdx) => (
                                   <TiStarFullOutline
                                     key={starIdx}
                                     className={`text-2xl ${
                                       starIdx <product.rating
                                       ? "text-[#FFAD33]"
                                       : "text-gray-300" 
                                     }`}
                                   />
                                 ))}
                             </div>
                                 </div>
               
                           
                                
                               </div>
                  
                             ))}
                         
              
           
        </div>
    );
};

export default ProductRight;