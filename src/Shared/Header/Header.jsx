import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';





const Header = () => {




    return (
        <Container>
            <div className=" text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex mt-2 bg-light p-3'>
                <button className='btn btn-danger'>Latest</button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* Navbar 
            <div className='mt-5 mb-5'>

            </div> */}
        </Container>
    );
};

export default Header;