import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/Logo.png'
import setting from '../img/setting.png'
import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  z-index:0;
  background-color: white;
  color: white;
`;

const Setting  = styled.img `
position: absolute;
width: 24px;
height: 24px;
right: 20px;
cursor: pointer;
`;
const Home  = styled.img `      
  width: 32px;
  height: 34.15px ;
  margin-left: 24px;
  cursor: pointer;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const HomeOnClick = () => {
    navigate('/home');
  };
  const onClick = () => {
    navigate('/setting');
  };
    return(
    <NavBarWrapper>

        <Home src={logo} onClick={HomeOnClick}></Home>
        <Setting src={setting} onClick={onClick}></Setting>
    </NavBarWrapper>
    );
};


export default NavBar;