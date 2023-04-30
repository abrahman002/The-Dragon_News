import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accept,setAccept]=useState(false)

    const handleSubmitRegister = event => {
        //    console.log(event.target);


        event.preventDefault();

        setError('')
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        //    console.log(name,photo,email,password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess('Register Successfully')
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleCheck=event=>{
        setAccept(event.target.checked);
    }
    return (
        <Container className='w-50 mx-auto login-info'>
            <h3 className='text-center'>Register your account</h3>
            <Form onSubmit={handleSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="Photo" name='photo' placeholder="Photo url" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" name='email' placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                     onClick={handleCheck}
                    type="checkbox" 
                    name='conditions'
                     label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} required />
                </Form.Group>
                <Button className='w-100 ' disabled={!accept} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Form.Text className="text-muted ">
                <span>Dont’t Have An Account ?</span><Link to='/login'>Login</Link>
            </Form.Text>
            <Form.Text className="text-muted"> <br />
            <p className='text-danger'>{error}</p>
            </Form.Text>
            <Form.Text className="text-muted"><br />
            <p className='text-success'>{success}</p>
            </Form.Text>
        </Container>
    );
};

export default Register;