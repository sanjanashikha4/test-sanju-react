import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartProduct from "./CartProduct";

const Wrapper = styled.section`
  padding: 12rem 2rem 2rem 2rem;
  min-height: calc(100vh - 40px);
  .heading_product {
    text-align: center;
    margin-bottom: 5rem;
  }
  h2 {
    position: relative;
    margin-bottom: 0;
    font-size: 5rem;
    font-weight: 700;
    span {
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
  .heading p{
    font-size:2rem;
    font-weight:600;
  
  }
  img.image_data {
    width: 50%;
  }
  .cart-hide, .cart_item,.icon-del{
    font-size: 1.5rem;
    font-weight: 500;
    color:#000;
}
  }
  .cart_item{
    display:flex;
    align-items: center;
  }
  .total,.cart-total{
     font-size:2.5rem;
     margin-right: 18rem;
     font-weight:600;
.price{
   font-size:2rem;
}
  }
  .cart-total{
    background-color:
    #d1cfcb
    ;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
.cart-hide{
   display:none;
}
  }
`;
const Cart = () => {
  return (
    <Wrapper>
      <div className="heading_product">
        <h2>
          Cart  <span>List</span>
        </h2>
      </div>

      <Container>
        <Row className="heading">
          <Col><p className="cart_item">Item</p></Col>
          <Col><p className="cart-hide">Price</p></Col>
          <Col> <p className="cart_item">Quantity</p></Col>
          <Col> <p className="cart-hide">Subtotal</p></Col>
          <Col> <p className="cart_item">Remove</p></Col>
        </Row>

      <hr/>
      <CartProduct
          prod_image="images/tv.png"
          altText="Image not found"
          price="$24,000"
          quantity="1"
          subtotal="$24,000"
        />
          <CartProduct
          prod_image="images/iphone_14.png"
          altText="Image not found"
          price="$1,19,000"
          quantity="1"
          subtotal="$1,19,000"
        />
        <CartProduct
          prod_image="images/headphone.png"
          altText="Image not found"
          price="$1000"
          quantity="1"
          subtotal="$15000"
        />
        

        <Row className="mt-5">
        <Col></Col>
        <Col  xs={12} md={12} lg={4} className="cart-total">
          <Row>
          <Col className="heading"><p>Cart Total</p></Col>
          <Col></Col>
          </Row>
          <Row>
          <Col><p className="heading">Subtotal</p> </Col>
          <Col><p className="heading">$1,22,222</p></Col>
          </Row>
          <hr/>
          <Row>
          <Col><p className="heading">Total</p> </Col>
          <Col><p className="heading">$1,22,222</p></Col>
          </Row>
         
        
        </Col>
      </Row>
      </Container>
    </Wrapper>
  );
};

export default Cart;
