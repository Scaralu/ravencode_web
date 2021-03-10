import { shade } from 'polished';
import styled from 'styled-components';

import dividerTop from '../../../assets/dividertop.svg';
import dividerBottom from '../../../assets/dividerbottom.svg';

export const Banner = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Introduction = styled.div`
  color: #FFF;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const IntroductionImageContainer = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-family: monaco, sans-serif;
  max-width: 450px;
`;

export const StyledButton = styled.button`
  max-width: 400px;
  height: 60px;
  border-radius: 10px;
  margin-top: 30px;
  background: #FF6700;
  font-family: monaco;
  letter-spacing: .1em;
  color: #FFF;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  border: none;

  &: hover {
    background: ${shade(0.2, '#FF6700')}
  }
`;

export const DividerTop = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  left: 0;
  bottom: 40px;
  background-image: url(${dividerTop});
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 2;
`;

export const DividerBottom = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  left: 0;
  bottom: 40px;
  background-image: url(${dividerBottom});
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 2;
`;