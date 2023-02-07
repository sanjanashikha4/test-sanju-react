import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { Button } from "./style/Button";

const SingleProduct = (props) => {
  return (
   
      <Card className="card-data">
        <Card.Img variant="top" src={props.image} alt="image not found" />
        <Card.Body>
          <Card.Title><h4 className="product_name">{props.product_name}</h4></Card.Title>
          <Card.Text>
          <p className="description">Description: {props.product_desc}</p>
            <p className="price">Price: {props.product_price}</p>
           
          </Card.Text>
         <Button style={{borderRadius: "3rem"}}>Add Cart</Button>
        </Card.Body>
      </Card>
    
  );
};

export default SingleProduct;
