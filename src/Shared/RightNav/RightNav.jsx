import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div className='d-grid grid-col gap-2'>
            <h3>Login With</h3>
            <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>

            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>

            <div>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
        </div>

    );
};

export default RightNav;