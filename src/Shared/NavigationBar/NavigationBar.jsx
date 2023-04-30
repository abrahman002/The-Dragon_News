import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import './Navigation.css'

const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <Container className='mb-5 text-center'>
            <Navbar collapseOnSelect expand="lg" >
                <Container className='text-center'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <div className='info'>
                                <Link to='/'>Home</Link>
                                <Link to="#pricing">About</Link>
                                <Link to="#pricing">Career</Link>
                            </div>

                        </Nav>
                        <Nav className='login'>

                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }


                            {user ?
                                <Button variant="dark" onClick={handleLogOut}>Logout</Button> :
                                <Button variant="dark"><Link to='/login' >Login</Link></Button>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;