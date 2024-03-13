import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Section>
      <Container>
        <HeroTextColumn>
          <Header>
            Welcome to the MVP Starter App
            <Highlight>Start Here</Highlight>
          </Header>
          <SubheaderAndStarsColumn>
            <SubHeader>Insert creative subheader here</SubHeader>
          </SubheaderAndStarsColumn>
        </HeroTextColumn>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #666;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 100%;
  padding: 0 7vw;
`;

const HeroTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-size: 4vw;
`;

const Highlight = styled.span`
  color: #007bff;
  text-shadow: 1px 1px 4px rgba(0, 123, 255, 0.4);
`;

const SubHeader = styled.h2`
  font-size: 1.5vw;
`;

const SubheaderAndStarsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

export default Hero;
