import React from "react";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CartProduct = (props) => {
  return (
    <Container>
      <Row className="cart_item">
        <Col>
          <img
            src={props.prod_image}
            alt={props.altText}
            className="image_data"
          />
        </Col>
        <Col>
          <p className="cart-hide">{props.price}</p>
        </Col>
        <Col>
          <p className="cart_item">{props.quantity}</p>
        </Col>
        <Col>
          <p className="cart-hide">{props.subtotal}</p>
        </Col>
        <Col>
          <p className="icon-del">
            <MdDelete />
          </p>
        </Col>
      </Row>


      
    </Container>
  );
};

export default CartProduct;
