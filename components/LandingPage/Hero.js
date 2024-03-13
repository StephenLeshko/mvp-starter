import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Section>
      <Overlay>
        <Container>
          <HeroTextColumn>
            <Header>
              Welcome to the MVP Starter App
              <Highlight>Start Here</Highlight>
            </Header>
            <SubheaderAndStarsColumn>
              <SubHeader>Insert creative subheader here</SubHeader>
              <CTAButton>Get Started</CTAButton>
            </SubheaderAndStarsColumn>
          </HeroTextColumn>
        </Container>
      </Overlay>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 80%;
  padding: 0 7vw;
`;

const HeroTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-size: calc(2rem + 2vw);
`;

const Highlight = styled.span`
  color: #00d4ff;
  text-shadow: 1px 1px 8px rgba(0, 212, 255, 0.7);
`;

const SubHeader = styled.h2`
  font-size: calc(1rem + 1vw);
  margin-top: 20px;
`;

const SubheaderAndStarsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const CTAButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Hero;
