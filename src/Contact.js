import React from 'react';
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from "./style/Button";




const Wrapper = styled.section`
padding: 12rem 2rem 2rem 2rem;
min-height: calc(100vh - 40px);
  .heading_product{
     text-align:center;
     margin-bottom: 5rem;
     h2{
      position: relative;
      margin-bottom: 0;
      font-size: 5rem;
      font-weight: 700;
      span{
        color: #f7444e;
        ::after {
          content: "";
          display: block;
          width: 70px;
          height: 5px;
          background: #f7444e;
          margin: 10px auto 10px;
      }
    }
     }
  }
 
  .contact_info{

  display:flex;
  justify-content:center;
  font-size:3rem;
  font-weight:600;
  margin-bottom:3rem;
  margin-right: 26rem;
  }

  .icon_content{
    font-size: 1.8rem;
    font-weight: 700;
   background-color: #000;
   border-radius:3rem;
   margin-bottom:3rem;
   padding:2rem;
   display: flex;
   color:#fff;
    align-items: center;
    width: 70%;
   .icon{
    width: 20%;
  }
   }
  }
  .card{
      padding:4rem;
      box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
      margin-left:8rem;
      h3{
         font-size:3rem;
         font-weight:600;
         margin-bottom:2rem;
      }
  }

  label.form-label {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .form-control{
    line-height:3rem;
  }
  .form-control:focus{
    border-color: #000;;
    box-shadow: 0 0 0 0.1rem #000;;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact_info{
      margin: 1rem;
    }
    .icon_content{
      width:auto;
    }
  .card{
    margin:0;
  }
  }

  `;
const Contact = () => {
  return (
 
    <Wrapper>
      <div className="heading_product">
        <h2>
          Contact 
          <span> Us</span>
        </h2>
      </div>

      <Container>
     
      <Row>
     
        <Col  xs={12} md={6} lg={6}>
        <h4 className='contact_info'>Contact Information</h4>
          <div className='icon_content'>
          <BsFillTelephoneFill className='icon' />
          <span>+91-8095794719</span>
          </div>
          <div className='icon_content'>
          <MdEmail  className='icon'/> 
          <span>sanjanashikha4@gmail.com</span>
          </div>
          <div className='icon_content'>
          <HiLocationMarker className='icon' />
          <span>Whitefield, Bangalore</span>
          </div>
        </Col>
        <Col  xs={12} md={6} lg={6}>
        
        <Card>
       
      <Card.Body>
      <h3>Feel Free To Contact</h3>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your  Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
      </Form.Group>
      <Button>Send</Button>
    </Form>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
      </Wrapper>
    


  )
}

export default Contact;