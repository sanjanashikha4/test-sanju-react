import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
 
  
const Wrapper =styled.footer`
 background-color:#000;
 color:#fff;
 padding: 3rem 1rem 3rem 1rem;
 p{
  color:#fff;
 }
 .footer-social--icons{
  display:flex;
  gap:2rem;
  div{
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
 }
 .icons{
  font-size:2rem;
  position: relative;
          cursor: pointer;
          p{
            color:#fff;
          }
         
 }
  
 .footer-social--icons div:hover{
  border:2px solid #f7444e;
  transition: 0.3s;
  .icons:hover{
    color:#f7444e;
    transition: 0.3s;
  }
 }
 
    

 }
`;
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <div className="footer-about">
              <h4>SANJANA SHIKHA</h4>
              <p>Ecommerce website established in year 2023.</p>
            </div>
          </Col>
          <Col>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  
                    <FaYoutube   style={{}}className="icons" />
                
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-contact">
              <h4>Call Us</h4>
              <h4>+91 8095794719</h4>
            </div>
          </Col>
        </Row>
        <hr className="my-4"/>
        <Row>
          <Col><p>
                @{new Date().getFullYear()} Sanjana Store. All Rights Reserved
              </p></Col>
          <Col>
          <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
          </Col>

        </Row>
      </Container>
    </Wrapper>
  );
};


export default Footer;
