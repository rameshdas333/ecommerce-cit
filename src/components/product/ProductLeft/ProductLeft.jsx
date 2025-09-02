import React from 'react';
import { Link } from 'react-router-dom';

const ProductLeft = () => {

        const shopCategories = [
        {name : 'Woman’s Fashion'},
        {name : 'Men’s Fashion'},
        {name : 'Electronics'},
        {name : 'Home & Lifestyle'},
        {name : 'Medicine'},
        {name : 'Sports & Outdoor'},
        {name : 'Baby’s & Toys'},
        {name : 'Groceries & Pets'},
        {name : 'Health & Beauty'},
    ]
    return (
        <div >
            <h1 className='font-primary text-[#262626] text-xl font-bold '>Shop by Category</h1>
            {
               shopCategories.map((shop,idx) =>(
                   <div key={idx}  className=''>
                    
                   <Link> <p className='py-3'>{shop.name}</p></Link>
                   </div>

               )) 
            }
            <h1 className='font-primary text-[#262626] text-xl pt-10  font-bold'>Shop by Color</h1>
            <div>
               <div>
               <div className='flex gap-[10px] items-center'>
                <div className='w-[11px] h-[11px] bg-black rounded-full flex justify-between gap-[10px]'> </div>
                <p className='text-base font-primary py-4 text-[#767676] '>Color 1</p>
               </div>
               <div className='flex gap-[10px] items-center'>
                <div className='w-[11px] h-[11px] bg-red-600 rounded-full flex justify-between gap-[10px]'> </div>
                <p className='text-base font-primary text-[#767676] '>Color 1</p>
               </div>
               <div className='flex gap-[10px] items-center'>
                <div className='w-[11px] h-[11px] bg-[#00FF38] rounded-full flex justify-between gap-[10px]'> </div>
                <p className='text-base font-primary text-[#767676] py-4 '>Color 1</p>
               </div>
             
            
               </div>
            </div>
        </div>
    );
};

export default ProductLeft;