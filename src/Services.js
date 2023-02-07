import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <Wrapper>
      <div className="heading_product">
        <h2>
          Why
          <span> Shop With Us</span>
        </h2>
      </div>
      <Container>
        <Row>
          <Col  xs={12} md={12} lg={4}>
            <div className="services-1">
              <div>
                <TbTruckDelivery className="icon" />
                <h3>Super Fast and Free Delivery</h3>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <div className="services-1">
                <div>
                  <GiReceiveMoney className="icon" />
                  <h3>Money Back Guarantee</h3>
                </div>
              
            </div>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <div className="services-1">
              <div>
                <RiSecurePaymentLine className="icon" />
                <h3>Super Secure Payment System</h3>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </Wrapper>

   
  );
};

const Wrapper = styled.section`
padding: 12rem 2rem 2rem 2rem;
text-align: center;

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
  .grid {
    gap: 4.8rem;
    }
  }
  .services-1 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color:#002c3e;
    text-align: center;
    border-radius: 2rem;
    color:#fff;
    margin-bottom:5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
    font-weight: 600;
  }
  .icon {
    width: 8rem;
    height: 8rem;
    padding: 1rem;
    border-radius: 50%;
    background-color:#002c3e ;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .services-1{
      margin-bottom:3rem;
    }
  }
`;
export default Services;
