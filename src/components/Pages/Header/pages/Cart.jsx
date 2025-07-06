
import Container from '../../../container/Container';
import MonitorImg from '../../../../assets/monitotimg.png'
import GameImg from '../../../../assets/gameimg.png'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import CartTotal from './CartTotal';
import Button from '../../../Button/Button';
;


const Cart = () => {
    return (
    <div>
        <Container>

         <div className='mt-20 mb-20 space-y-5'>
            <div className='rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.25)] '>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                
            </div>
            <div className='rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.1)] '>
              <img src={MonitorImg} alt="" />
                <p>$650 </p>
                <div className='flex p-3 gap-6 border rounded'>
                    <p>01</p>
                    <div>
                         <IoIosArrowUp />
                         <IoIosArrowDown />
                        </div>
                </div>
                <p>$650</p> 
            </div>
            <div className='rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.25)] '>
               <img src={GameImg} alt="" />
                <p> $550</p>
                   <div className='ml-3 flex p-3 gap-6 border rounded'>
                    <p>01</p>
                
                    <div>
                         <IoIosArrowUp />
                         <IoIosArrowDown />
                        </div>
                </div>
               <p>$1100</p>
                
            </div>
         
            {/* cart total components */}

            <div className='flex  justify-between'>
                
                  <div>
                      <Button name='Apply Coupon'/>
                  </div>
               
                
                    <CartTotal/>
               
            </div>
         </div>
        </Container>
    </div>

    );
};

export default Cart;