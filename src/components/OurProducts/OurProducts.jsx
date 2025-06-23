
import { GoHeart } from 'react-icons/go';
import Container from '../container/Container';
import Title from '../Title/Title';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';
import cat from '../../assets/cat.png';
import camera from '../../assets/camera.png';
import laptop from '../../assets/laptop.png'
import Button from '../Button/Button';

const OurProducts = () => {
    return (
        <div>
            <Container>
              <div className='pb-[122px]  relative after:absolute after:content-[" "] after:bg-[#D9D9D9] after:h-[1px] after:w-full   after:top-0 after:left-0 '>
                    <Title   name="This Month" title='Best Selling Products' />
                   <div className='grid grid-cols-4 gap-[30px]'>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={cat} alt="" />

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
                        <img src={camera} alt="" />

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
                        <img src={laptop} alt="" />

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
                       
                        <img src={cat} alt="" />
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
{/* ================================================= */}
                <div className='py-[60px] gap-[30px] flex items-center justify-between'>
                    <div >
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={cat} alt="" />

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
                        <img src={camera} alt="" />

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
                        <img src={laptop} alt="" />

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
                       
                        <img src={cat} alt="" />
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
                   
                  
                    <div className=' text-center text-white'>
                       <Button name="View All Products"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurProducts;