import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
             <p>
                <h2 className='text-center'>Term & Conditions</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis laborum ipsum a harum libero dolorum dolor obcaecati officia id, distinctio accusantium, at culpa incidunt iusto perspiciatis earum voluptatibus facere quaerat?
                <Link to='/register'>Go to register</Link>
             </p>
        </Container>
    ); 
};

export default Terms;