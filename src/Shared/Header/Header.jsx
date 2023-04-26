import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

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
            {/* Navbar  */}
            <div className='mt-5 mb-5'>
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;