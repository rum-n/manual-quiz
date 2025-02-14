'use client';

import Image from 'next/image';
import { useState } from 'react';
import Quiz from '@/components/Quiz/Quiz';
import quizData from '@/data/quiz.json';
import styled from 'styled-components';
import ManualLogo from '@/components/Icons/ManualLogo';
import TwitterIcon from '@/components/Icons/TwitterIcon';
import GoogleIcon from '@/components/Icons/GoogleIcon';
import FacebookIcon from '@/components/Icons/FacebookIcon';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 750px;
  background: url('/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 138px;

  @media (max-width: 1440px) {
    padding: 0 5%;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    min-height: 500px;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 138px;

  @media (max-width: 1440px) {
    left: 5%;
  }

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 90px;
  line-height: 90px;
  margin-bottom: 1.5rem;
  color: #0B3B3C;
  max-width: 800px;
  font-weight: 400;
  letter-spacing: -3%;

  @media (max-width: 1024px) {
    font-size: 60px;
    line-height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 468px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 468px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 2rem;
  color: #0B3B3C;
  max-width: 600px;
  font-weight: 400;
`;

const StartButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 15%;
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
  
  @media (max-width: 1440px) {
    padding: 90px 5%;
    gap: 60px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 30px;
  }
`;

const InfoSectionTitle = styled.h2`
  font-size: 40px;
  line-height: 60px;
  font-weight: 400;
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
  margin-bottom: 10px;
  color: #0B3B3C;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 15%;
  text-transform: uppercase;
`;

const InfoContentTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 20px;
  color: #0B3B3C;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -3%;
`;

const InfoContentDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #0B3B3C;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0%;
`;

const BackgroundNumber = styled.span<{ position: 'left' | 'right' }>`
  position: absolute;
  font-size: 450px;
  color: #F4F7F5;
  z-index: 0;
  font-weight: 400;
  line-height: 450px;
  letter-spacing: -3%;
  ${props => props.position === 'left'
    ? 'margin-left: 280px;'
    : 'margin-left: 100px;'
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const InfoImage = styled.div`
  position: relative;
  z-index: 1;
  
  img {
    width: 370px;
    height: 445px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    img {
      width: 300px;
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    order: 2;
    
    img {
      width: 100%;
      height: auto;
      aspect-ratio: 370/445;
    }
  }
`;

const Footer = styled.footer`
  background: #E8EFE9;
  padding: 73px 138px 0 138px;

  @media (max-width: 1440px) {
    padding: 73px 5% 0 5%;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 0 20px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  column-gap: 0;
  max-width: 1200px;
  margin: 0 auto;

  > *:first-child {
    margin-right: 320px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    
    > *:first-child {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  width: auto;

  h3 {
    font-size: 10px;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 15%;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0%;
  }

  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 16px;
  }
  
`;

const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;

  hr {
    width: 100%;
    border: 1px solid #BDCDC5;
  }

  p {
    font-size: 16px;
    color: #6D8A83;
    margin: 25px 0;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0%;
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
                We&apos;re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
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
              <InfoContentTitle>Hair loss needn&apos;t be irreversible. We can help! </InfoContentTitle>
              <InfoContentDescription>We&apos;re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</InfoContentDescription>
            </InfoContent>
          </InfoSection>

          <InfoSection>
            <BackgroundNumber position="right">02</BackgroundNumber>
            <InfoContent>
              <InfoContentTopic>Erectile dysfunction</InfoContentTopic>
              <InfoContentTitle>Erections can be a tricky thing. But no need to feel down!</InfoContentTitle>
              <InfoContentDescription>We&apos;re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</InfoContentDescription>
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
                <ManualLogo width={70} height={70} />
              </FooterColumn>
              <FooterColumn>
                <h3>Product</h3>
                <ul>
                  <li><a href="#">Popular</a></li>
                  <li><a href="#">Trending</a></li>
                  <li><a href="#">Guided</a></li>
                  <li><a href="#">Products</a></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h3>Company</h3>
                <ul>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Strategy</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h3>Info</h3>
                <ul>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Customer Service</a></li>
                  <li><a href="#">Get started</a></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <SocialMediaWrapper>
                  <h3>Follow Us</h3>
                  <ul>
                    <li><a href="#"><FacebookIcon /></a></li>
                    <li><a href="#"><GoogleIcon /></a></li>
                    <li><a href="#"><TwitterIcon /></a></li>
                  </ul>
                </SocialMediaWrapper>
              </FooterColumn>
            </FooterGrid>

            <CopyrightWrapper>
              <hr />
              <p>© 2025 Manual. All rights reserved.</p>
            </CopyrightWrapper>
          </Footer>
        </>
      )}
    </LandingContainer>
  );
}
