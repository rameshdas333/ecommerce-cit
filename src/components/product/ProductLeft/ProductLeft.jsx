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
               shopCategories.map(shop =>(
                   <div>
                    
                   <Link> <p className='py-3'>{shop.name}</p></Link>
                   </div>

               )) 
            }
        </div>
    );
};

export default ProductLeft;