import React from 'react';
import Image5 from '../../assets/image5.png'
import Frame6 from '../../assets/Frame6.png'
import Frame7 from '../../assets/Frame7.png'
import Frame8 from '../../assets/Frame8.png'
import Frame9 from '../../assets/Frame9.png'


const SingleProductDetails = () => {
    return (
             <div className='grid grid-cols-6 gap-4 mt-20'>
                <div className='col-span-1 '>
                    <div className=' flex flex-col gap-y-5 rounded'>
                        <div className='bg-[#F5F5F5]'>
                     <img className='' src={Frame6} alt="" />

                        </div>
                        <div className='bg-[#F5F5F5]'>
                     <img className='' src={Frame7} alt="" />

                        </div>
                        <div className='bg-[#F5F5F5]'>
                     <img className='' src={Frame8} alt="" />

                        </div>
                        <div className='bg-[#F5F5F5]'>
                     <img className='' src={Frame9} alt="" />

                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='bg-[#F5F5F5] rounded px-7 py-[140px]'>
                        <img className='w-[446px]' src={Image5} alt="" />
                    </div>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-center'>Havic HV G-92 Gamepad</h1>
                </div>
            </div>
    );
};

export default SingleProductDetails;