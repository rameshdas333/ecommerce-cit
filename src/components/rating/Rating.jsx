import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const Rating = ({rating}) => {
    const totalStars = 5;

    return (
        <div className='flex items-center  text-left text-2xl '>
            {
                Array.from({length: totalStars},(_,idx)=>{
                 const starIndex = idx +1;
                 return starIndex <= rating ? (<MdOutlineStar className='text-yellow-500' />):(<MdOutlineStarBorder className='text-gray-400' />)
                })
            }
        </div>
    );
};

export default Rating;