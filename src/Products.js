import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";


const Wrapper =styled.section`
padding: 12rem 2rem 2rem 2rem;
.heading_product{
  text-align:center;
  margin-bottom: 5rem;
}
}
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
.card-data{
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 5%;
  img{
    width:55%!important;
  }
}
.product_name{
  color:#000;
  font-size:2rem;
  font-weight:600;

}
.price{
  color:#000;
  font-size:1.8rem;
  font-weight:600;
}
.description{
  color:#000;
  font-size:1.5rem;
  font-weight:500;
}
.product_name,.price,.description{
  line-height:2rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .card-data.card {
    margin-bottom:3rem;
  }
}
`;
const Products = () => {
  return (
    <Wrapper>
      <Container>
        <div className="heading_product">
        <h2>Our <span>Products</span></h2>
        </div>
        <Row className="mb-5">
          <Col xs={12} md={12} lg={4}>
            <SingleProduct
              image="images/refrigenator.png"
              product_name="LG Refrigarator"
              product_price="34,000"
              product_desc="Double Door LG Refrigarator"
            />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <SingleProduct
              image="images/iphone_14.png"
              product_name="Iphone 14 Pro "
              product_price="1,19,000"
              product_desc="Iphone 14 Pro 128Gb"
            />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <SingleProduct
              image="images/ipad.png"
              product_name="Apple Ipad"
              product_price="27,000"
              product_desc="Gen 5 Apple Ipad"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <SingleProduct
              image="images/headphone.png"
              product_name="Boat Rocker"
              product_price="1500"
              product_desc="Boat Rocker bluetooth headset"
            />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <SingleProduct
              image="images/tv.png"
              product_name="LG TV"
              product_price="24,000"
              product_desc="32 inch Smart TV"
            />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <SingleProduct
              image="images/watch.png"
              product_name="Realme watch"
              product_price="4,000"
              product_desc="Realme smart watch "
            />
          </Col>
        </Row>
      </Container>
      </Wrapper>
    
  );
};

export default Products;
