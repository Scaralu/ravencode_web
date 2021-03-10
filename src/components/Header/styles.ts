import styled from 'styled-components';
import { shade } from 'polished'; 

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 15px;
  flex-wrap: wrap;  
`;

export const LogoWrapper = styled.div``;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #FFF;
  padding: 10px;
  margin-right: 10px;

  &: hover {
    border-bottom: 2px solid #FF6700;
  }
`;

export const NavButton = styled.button`
  border: none;
  font-family: monaco, sans-serif;
  color: #FFF;
  background: #FF6700;
  padding: 10px;

  width: 100px;
  border-radius: 10px;
  cursor: pointer;

  &: hover {
    background: ${shade(0.2, '#FF6700')};
  }
`;