import React from 'react';

import {
  Container,
  LogoWrapper,
  Nav,
  NavLink,
  NavButton,
} from './styles';

import logoImage from '../../assets/logo-ravencode.svg';

const navLinks = document.querySelectorAll('nav a');

function handleNavLinkClick(this: HTMLElement) {
  navLinks.forEach(element => {
    element.classList.remove('active');
  })

  this.classList.add('active');
}

const Header: React.FC = () => {
  navLinks.forEach(element => {
    element.addEventListener('click', handleNavLinkClick)
  })
  
  return (
    <Container>
      <LogoWrapper>
        <img src={logoImage} alt="ravencode-logo"/>
      </LogoWrapper>
      <Nav>
        <NavLink href="#" className="active">HOME</NavLink>
        <NavLink href="#">SOBRE</NavLink>
        <NavLink href="#">PRODUTO</NavLink>
        <NavButton>LOG IN</NavButton>
      </Nav>
    </Container>
  );
}

export default Header;