import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { Button } from "../style/Button";


const Wrapper =styled.section`


label.form-label {
  font-size: 1.5rem;
  font-weight: 500;
}
.form-control{
  line-height:3rem;
}
input.form-control:focus {
  border-color: #000;;
  box-shadow: 0 0 0 0.1rem #000;
}
`;

<styled>
.btn-login:hover 
  boxShadow:" 0px 2px 4px 3px rgb(247 68 78)"

  </styled>

const Login=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <Button className='btn-login' onClick={handleShow}>Login</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
          <Modal.Title><h5 style={{ color: "#e6633c", margin: "2rem", fontSize: "1.8rem" }}>
          Please enter credential to login
        </h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Wrapper>
      <Form.Group className="mb-3">
        <Form.Label>Username/Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Username or Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      </Wrapper>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>

        </Modal.Footer>
      </Modal>
   
    </>
  );
}
export default Login;