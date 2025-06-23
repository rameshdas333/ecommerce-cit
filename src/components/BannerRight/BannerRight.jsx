import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../assets/banner.jpg'


const BannerRight = () => {
    var settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
    return (
   <div className="w-[80%] pt-10 pl-10">
         <Slider {...settings}>
      <div>
       <img className="w-full" src={banner} alt="" />
      </div>
      <div>
         <img className="w-full" src={banner} alt="" />
      </div>
      <div>
         <img className="w-full" src={banner} alt="" />
      </div>
     
    </Slider>
   </div>
    );
};

export default BannerRight;