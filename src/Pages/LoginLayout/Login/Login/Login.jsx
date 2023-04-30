import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Login = () => {

    const { userSignIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const Navigate=useNavigate()
    const location=useLocation();
    console.log(location)
    const from=location.state?.from?.pathname || '/category/0';
    console.log(from)

    const handleSubmitForm = event => {
        // console.log(event.target)
        event.preventDefault()

        setError('')
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        userSignIn(email, password)
            .then(result => {
                const userlogged = result.user;
                // console.log(userlogged);
                setSuccess('Login SuccessFully');
                Navigate(from)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container className='w-50 mx-auto login-info'>
            <h3 className='text-center'>Login your account</h3>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 ' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-muted ">
                <span>Dont’t Have An Account ?</span><Link to='/register'>Register</Link>
            </Form.Text>
            <Form.Text className="text-muted "> <br />
                <p className='text-danger'>{error}</p>
            </Form.Text>
            <Form.Text className="text-muted "><br />
                <p className='text-success'>{success}</p>
            </Form.Text>
        </Container>
    );
};

export default Login;