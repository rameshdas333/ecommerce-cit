
import Container from '../../../container/Container';
import MonitorImg from '../../../../assets/monitotimg.png'
import GameImg from '../../../../assets/gameimg.png'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import CartTotal from './CartTotal';
import Button from '../../../Button/Button';
import { useSelector } from 'react-redux';
;


const Cart = () => {
    const data = useSelector(state=>state.cartDetails.cartItems)
    console.log(data,'data')
    const totalPrice = data.reduce((prev,current)=>{
        console.log(current.price,'pricee')
        return prev + current.price * current.cartQun
    },0)
    console.log(totalPrice)
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
          {
            data.map((product,idx) => (
                  <div key={idx} className='rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.1)] '>
            <div className='flex items-center'>
                  <img className='w-[80px] h-15' src={product.thumbnail} alt="" />
                  <p className='w-24'>{product.title}</p>
            </div>
                <p>${product.price}</p>
                <div className='flex p-3 gap-6 border rounded'>
                    <p>{product.cartQun}</p>
                    <div>
                         <IoIosArrowUp />
                         <IoIosArrowDown />
                        </div>
                </div>
                <p>${product.price * product.cartQun}</p> 
            </div>
            ))
          }
            {/* <div className='rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.25)] '>
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
                
            </div> */}
         
            {/* cart total components */}

            <div className='flex  justify-between'>
                <div>
                    <input className='text-base font-primary border overflow-hidden rounded w-[300px] py-4 px-6 mr-4' type="text" placeholder='Coupon Code'/>
               
                      <Button name='Apply Coupon'/>
                  </div>
               
                
                    <CartTotal totalPrice={totalPrice}/>
               
            </div>
         </div>
        </Container>
    </div>

    );
};

export default Cart;