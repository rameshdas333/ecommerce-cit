import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../container/Container';

const NextArrows = ({onClick}) => {
    return (
        <div>
          
      <Container>
      <div
    className="absolute z-10 -top-16 -right-0 bg-white border rounded-full shadow hover:bg-red-500 hover:text-white cursor-pointer p-2"
    onClick={onClick}>
    <FaArrowRight size={20} />
  </div>
      </Container>

        </div>
    );
};

export default NextArrows;

