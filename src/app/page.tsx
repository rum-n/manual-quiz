'use client';

import Image from 'next/image';
import { useState } from 'react';
import Quiz from '@/components/Quiz/Quiz';
import quizData from '@/data/quiz.json';
import styled from 'styled-components';
import ManualLogo from '@/components/Icons/ManualLogo';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 1440px;
  height: 750px;
  padding: 2rem;
  background: url('/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 138px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 138px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #0B3B3C;
  max-width: 800px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 468px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666;
  max-width: 600px;
`;

const StartButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  background: #7E0707;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  text-transform: uppercase;

  &:hover {
    background: #0d4647;
  }
`;

const InfoSection = styled.section`
  display: flex;
  gap: 120px;
  padding: 90px 337px 90px 238px;
  background: white;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
  }
`;

const InfoSectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0B3B3C;
  text-align: center;
  margin-top: 70px;
  margin-bottom: -20px;
  z-index: 2;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const InfoContentTopic = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #0B3B3C;
`;

const InfoContentTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #0B3B3C;
`;

const InfoContentDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #0B3B3C;
`;

const BackgroundNumber = styled.span<{ position: 'left' | 'right' }>`
  position: absolute;
  font-size: 450px;
  font-weight: 700;
  color: #F4F7F5;
  z-index: 0;
  ${props => props.position === 'left'
    ? 'margin-left: 280px;'
    : 'margin-right: 280px;'
  }
`;

const InfoImage = styled.div`
  position: relative;
  z-index: 1;
  
  img {
    width: 370px;
    height: 445px;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Footer = styled.footer`
  background: #E8EFE9;
  padding: 4rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <LandingContainer>
      {showQuiz ? (
        <Quiz data={quizData} onClose={() => setShowQuiz(false)} />
      ) : (
        <>
          <Hero>
            <LogoWrapper>
              <ManualLogo />
            </LogoWrapper>
            <TitleWrapper>
              <HeroTitle>Be good to yourself</HeroTitle>
              <HeroSubtitle>
                We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
              </HeroSubtitle>
              <StartButton onClick={() => setShowQuiz(true)}>
                Take the Quiz
              </StartButton>
            </TitleWrapper>
          </Hero>

          <InfoSectionTitle>
            What we can help with
          </InfoSectionTitle>
          <InfoSection>
            <BackgroundNumber position="left">01</BackgroundNumber>
            <InfoImage>
              <Image
                src="/first-fold-image.png"
                alt="Treatment process"
                width={600}
                height={400}
                priority
              />
            </InfoImage>
            <InfoContent>
              <InfoContentTopic>Hair loss</InfoContentTopic>
              <InfoContentTitle>Hair loss needn't be irreversible. We can help! </InfoContentTitle>
              <InfoContentDescription>We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</InfoContentDescription>
            </InfoContent>
          </InfoSection>

          <InfoSection>
            <BackgroundNumber position="right">02</BackgroundNumber>
            <InfoContent>
              <InfoContentTopic>Erectile dysfunction</InfoContentTopic>
              <InfoContentTitle>Erections can be a tricky thing. But no need to feel down!</InfoContentTitle>
              <InfoContentDescription>We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</InfoContentDescription>
            </InfoContent>
            <InfoImage>
              <Image
                src="/second-fold-image.png"
                alt="Scientific research"
                width={600}
                height={400}
              />
            </InfoImage>
          </InfoSection>

          <Footer>
            <FooterGrid>
              <FooterColumn>
                <h3>Company</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h3>Resources</h3>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h3>Follow Us</h3>
                <ul>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </FooterColumn>
            </FooterGrid>
          </Footer>
        </>
      )}
    </LandingContainer>
  );
}
