import React from 'react';
import Container from '../container/Container';
import Title from '../Title/Title';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame 4.png'

const NewArrival = () => {
    return (
        <div>
            <Container>
                <div>
                    <Title name="Featured" title="New Arrival"/>
                    <div className='grid grid-cols-4 gap-[30px]'>
                        <div className='col-span-2'>
                            <img className='w-[570px]' src={Frame1} alt="" />
                        </div>
                        <div className='col-span-2 space-y-[32px] '>
                            <div className='col-span-1 '>
                                <img src={Frame2} alt="" />
                            </div>
                            <div className='grid grid-cols-2 gap-[30px]'>
                                <div><img src={Frame3} alt="" /></div>
                                <div><img src={Frame4} alt="" /></div>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </Container>
        </div>
    );
};

export default NewArrival;