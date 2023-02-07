import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../style/Button";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
const Wrapper = styled.section`
padding: 12rem 2rem 2rem 2rem;
min-height: calc(100vh - 40px);

  .hero-section-data{
    font-size: 4.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #002c3e;
    line-height: 70px;,
    .intro-data{
      color: #f7444e;
      h2{
          color:#000;
          font-size: 4.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #002c3e;
    p{
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 1.5rem;
      color:#000 !important;
    }
      }
    }
}
  
`;

const HeroSection =()=> {
  const navigate = useNavigate();
  return (
    <Wrapper>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={6}>
        <div className="hero-section-data">
            <div className="intro-data">Welcome to</div>
            <h2>Sanjana Store</h2>
            <p>
              Customer will get variety of products on same plateform.We will
              give you the best price and service in worldwide.We can understand
              customer feeling.
            </p>

            <Button onClick={() => navigate("/products")}>Shop Now</Button>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6}><div className="hero-section-image">
            <figure>
              <img
               rounded
                src="images/hero_6.jpg"
                alt="hero-section-photo"
                className="img-style img-fluid rounded-pill"
              
              />
            </figure>
          </div></Col>
      </Row>
      </Container>
      
      </Wrapper>
  );
}

export default HeroSection;