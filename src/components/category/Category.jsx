

import CategorySlide from '../CategorySlide/CategorySlide';
import Container from '../container/Container';


const Category = () => {


    return (
      <div className="pt-[153px] pb-[95px]">
        <Container>
          <div className="flex items-center gap-2 pb-5">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></div>
            <p className="text-red-500 font-semibold ">Categories</p>
          </div>
          <h2 className="text-4xl font-semibold font-secoundary mb-5">
            Browse By Category
          </h2>
          {/* slive */}
         
         
         {/*category slide   */}
         
         <CategorySlide/>
        
        
        </Container>
      </div>
    );
};

export default Category;