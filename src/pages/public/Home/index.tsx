import React from 'react';

import Header from '../../../components/Header';

import {
  Banner,
  Introduction,
  IntroductionImageContainer,
  StyledText,
  StyledButton,
  DividerTop,
} from './styles'

import bannerImg from '../../../assets/banner-ravencode.svg';

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <Banner>
        <Introduction>
          <h1>Your dream, our project</h1>
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique neque vel facilisis imperdiet.</StyledText>
          <StyledButton>Get in touch</StyledButton>
        </Introduction>
        <IntroductionImageContainer>
          <img src={bannerImg} alt="banner ravencode"/>
        </IntroductionImageContainer>
      </Banner>
      <DividerTop />
    </>
  );
}

export default Home;