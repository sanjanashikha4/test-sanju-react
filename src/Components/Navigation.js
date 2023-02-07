import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiShoppingCart } from "react-icons/fi";
import Login from "./Login";
import styled from "styled-components";
import Button from "react-bootstrap/Button";


const Wrapper = styled.div`
  .logo_content {
    width: 50%;

    .logo {
      margin: 1rem 0rem 1rem 0rem;
      img {
        margin-left: 10rem;
      }
    }
  }
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      text-transform: uppercase;
      :hover{
        color: #f7444e;
        border-bottom: 2px solid #000;
        font-size: 2rem;
       
        
        
      }
    }
    .navbar-link :focus {
      color: #f7444e;
    }
  }
  span.cart-total--item {
    background: #f7444e;
    border-radius: 50%;
   padding:6px;
   color:#fff;

  }
  
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo_content{
      width:100%;
      .logo img{
        margin-left:0;
      }
    }
    .mobile-btn {
      position: absolute;
      top: 25px;
      right: 25px;
      font-size: 2rem;
    }
  }
`;

const Navigation = () => {
 
  return (
    <Wrapper>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container className="logo_content">
          <Navbar.Brand href="/" className="logo">
            <img
              alt="Logo"
              src="./images/logo1.png"
              height="40"
              width="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="mobile-btn"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto navbar-lists">
              <Nav.Link activeClassName="active"  href="/" className="navbar-link">
                Home
              </Nav.Link>
              <Nav.Link  activeClassName="active"  href="products" className="navbar-link">
                Products
              </Nav.Link>
              <Nav.Link activeClassName="active"  href="services" className="navbar-link">
                Services
              </Nav.Link>
              <Nav.Link  activeClassName="active"  href="contact" className="navbar-link">
                Contact
              </Nav.Link>
              <Nav.Link activeClassName="active"  href="cart" className="navbar-link">
                <FiShoppingCart className="cart-trolley--link" />
                <span className="cart-total--item">3</span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Login />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;
