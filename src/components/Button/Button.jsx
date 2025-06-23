import React from 'react';
import Container from '../container/Container';

const Button = ({name}) => {
    return (
        <div>
            <Container>
                <div>
                    <button className='bg-primary1 rounded px-12 py-4'>{name}</button>
                </div>
            </Container>
        </div>
    );
};

export default Button;