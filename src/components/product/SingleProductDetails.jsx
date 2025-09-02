import { useEffect, useState } from "react";
import Image5 from "../../assets/image5.png";
import Frame6 from "../../assets/Frame6.png";
import Frame7 from "../../assets/Frame7.png";
import Frame8 from "../../assets/Frame8.png";
import Frame9 from "../../assets/Frame9.png";
import Button from "../Button/Button";
import { Link, useParams } from "react-router-dom";
import DeliberyIMG from "../../assets/Delivery.png";
import Delivery from "./ProductRight/Delivery";
import Rating from "../rating/Rating";
import { useDispatch } from "react-redux";
import { cartTotal } from "../slices/CartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

const SingleProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id, "id");
  const [productData, setProductData] = useState([]);
  const [selectImg, setSelectImg] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  const singleProduct = productData.find((product) => product.id == id);
  console.log(singleProduct);

  useEffect(() => {
    if (singleProduct?.thumbnail) setSelectImg(singleProduct?.thumbnail);
  }, [singleProduct]);
  const handleAddTocart = (product) => {
    dispatch(cartTotal(product));
    toast("Add To Cart");
  };
  return (
    <div className="grid grid-cols-6 gap-4 mt-20">
      <div className="col-span-1 ">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {/* <div className=' flex flex-col gap-y-5 rounded'>
                        <div className='bg-[#F5F5F5] flex justify-center items-center'>
                     <img onClick={()=>setSelectImg(Frame6)} className='' src={Frame6} alt="" />

                        </div>
                        <div className='bg-[#F5F5F5]'>
                     <img  onClick={()=>setSelectImg(Frame7)} className='' src={Frame7} alt="" />

                        </div>
                        <div className='bg-[#F5F5F5]'>
                     <img  onClick={()=>setSelectImg(Frame8)} className='' src={Frame8} alt="" />

                        </div>
                        <div className='bg-[#F5F5F5]'>
                     <img onClick={()=>setSelectImg(Frame9)}  className='' src={Frame9} alt="" />

                        </div>
                    </div> */}

        {singleProduct?.images.map((img, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] flex justify-center items-center"
          >
            <img onClick={() => setSelectImg(img)} src={img} />
          </div>
        ))}
      </div>
      <div className="col-span-3">
        <div className="bg-[#F5F5F5] flex items-center justify-center rounded px-7 py-[140px]">
          <img className="w-[446px] " src={selectImg} alt="" />
        </div>
      </div>
      <div className="col-span-2 text-start!">
        <h1 className=" font-semibold text-2xl text-start leading-6 p-4">
          {singleProduct?.title}
        </h1>

        {/* <div className='flex space-x-1 pb-4'>
               
                       {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={` w-5 h-5 ${i < Math.round(singleProduct?.rating) ? 'fill-yellow-500' : 'fill-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))} 

                <p>({singleProduct?.reviews.length}   Reviews) | <span className='text-green-400'>In Stock</span></p>
                
              
                </div>  */}
        <Rating rating={singleProduct?.rating} />

        <p className="font-secoundary text-2xl pb-6 ">
          ${singleProduct?.price}
        </p>
        <p className="text-[14px] font-primary">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <div className='relative after:absolute after:content-[""] after:top-6 after:h-[2px] after:w-[400px]  after:bg-gray-200 '></div>

        <Link onClick={() => handleAddTocart(singleProduct)}>
          <div className=" pt-20">
            <Button name="Add to Cart" />
          </div>
        </Link>
        {/* Delivery section  */}
        <div className="mt-20">
          <Delivery />
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
