import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='bg-black font-primary w-auto text-center'>
            <p className="text-[#FAFAFA] text-sm py-4">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!   <span className="underline pl-2">  <Link to={`/product`}>ShopNow</Link></span></p>
        </div>
    );
};

export default Header;                                                                             5
