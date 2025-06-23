
import { GoHeart } from 'react-icons/go';
import Container from '../container/Container';
import Title from '../Title/Title';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';
import cat from '../../assets/cat.png';
import camera from '../../assets/camera.png';
import laptop from '../../assets/laptop.png'
import Button from '../Button/Button';
import { useState } from 'react';

const OurProducts = () => {
    const [visible,setvisible] =useState(4);
    const handleLoadData = () =>{
        setvisible((prev) => prev+4);
      
    }


    const products = [
        {
            name:'The north coat',
            price:'$266',
            image:cat
        },
      
        // {
        //    name:'The north coat',
        //       price:'$266',
        //     image:camera
        // },
        // {
        //    name:'The north coat',
        //     price:'$266',
        //     image:laptop
        // },
        // {
        //    name:'The north coat',
        //     price:'$266',
        //     image:cat
        // },
        // {
        //   name:'The north coat',
        //    price:'$266',
        //     image:camera
        // },
        // {
        //    name:'The north coat',
        //     price:'$266',
        //     image:laptop
        // },
        // {
        //   name:'The north coat',
        //   price:'$266',
        //     image:cat
        // },
        // {
        //     name:'The north coat',
        //     price:'$266',
        //     image:camera
        // },
        // {
        //    name:'The north coat',
        //     price:'$266',
        //     image:laptop
        // },
    ]
    return (
        <div>
            <Container>
              <div className='pb-[122px] pt-[120px]'>
                    <Title   name="This Month" title='Best Selling Products' />
              {
                products.slice(0,visible).map((product =>(
                    
                    

                       <div className='flex flex-wrap items-center  gap-[30px]'>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={product.image} alt="" />

                           <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                           
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>

                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>

                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={product.image} alt="" />

                           <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>

                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={product.image} alt="" />

                           <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                        
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>

                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex flex-col items-center justify-center w-[270px] h-[250px]'>
                       
                        <img src={product.image} alt="" />
                         <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                          
                        </div>
                        

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>


                    <div >
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={product.image} alt="" />

                           <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                           
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={product.image} alt="" />

                           <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={product.image} alt="" />

                           <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                        
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex flex-col items-center justify-center w-[270px] h-[250px]'>
                       
                        <img src={product.image} alt="" />
                         <div className=' bottom-0  absolute left-0 '>
                              <button className=" py-[7px] font-medium text-white font-primary  w-full leading-[24px] text-[15px] px-[90px] join-item   hover:bg-black hover:rounded-b-md hover:text-white ">Add To Cart</button>
                           </div>
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                          
                        </div>
                        

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>

               
                </div>
                )))
              }
                   
                  
                    <div onClick={handleLoadData} className=' text-center pt-15 text-white'>
                       <Button  name="View All Products"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurProducts;