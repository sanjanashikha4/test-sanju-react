import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Navigation";

const Header = () => {
  return (
    // <MainHeader>
    //   <NavLink to="/">
    //     <img src="./images/logo3.png" alt="logo img" className="logo" />
    //   </NavLink>
    //   <Nav />
    // </MainHeader>
    <Nav/>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 11rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  .logo {
    height: 8rem;
    margin: 2rem 0rem 2rem 0rem;
  }
`;
export default Header;
