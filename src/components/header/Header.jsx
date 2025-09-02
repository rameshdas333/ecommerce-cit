import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div className='bg-black font-primary w-auto text-center'>
          <Marquee>
              <p className="text-[#FAFAFA] text-sm py-4">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!   <span className="underline pl-2">  <Link to={`/product`}>ShopNow</Link></span></p>
       </Marquee>
        </div>
    );
};

export default Header;                                                                             5