import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Container from '../container/Container';

const PrevArrows = ({onClick}) => {
    return (
        <div>
           
  <Container>

    <div
    className="absolute z-10 -top-11 right-14 transform -translate-y-1/2 bg-white border rounded-full shadow hover:bg-red-500 hover:text-white cursor-pointer p-2"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
  </Container>

        </div>
    );
};

export default PrevArrows;