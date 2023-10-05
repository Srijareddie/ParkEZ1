import React from 'react';
import styled from 'styled-components';
import myimg from '../assets/images/about.jpg';

const About = () => {
  return (
    <>
    <HeaderWrapper>
      <h1>About ParkEZ</h1>
        <p>
          Welcome to ParkEZ, your ultimate parking solution provider! We aim to significantly improve the way businesses, property owners, and customers experience parking. With our state-of-the-art technology and user-friendly platform, we not only simplify parking management but also create new revenue streams for businesses and property owners while making parking hassle-free for customers.
          </p>
    </HeaderWrapper>
    <AboutWrapper>
      <SectionHeader>Our Mission</SectionHeader>
      <RoundedRectangle>
        <Paragraph>
          At ParkEZ, our mission is to transform the parking experience by offering innovative solutions that cater to the needs of businesses, advertisers, and customers alike. We are dedicated to providing an efficient parking management system that reduces congestion, minimizes crime, and streamlines the entire parking process.
        </Paragraph>
      </RoundedRectangle>
      <SectionHeader>Our services</SectionHeader>
      <RoundedRectangle>
        <Paragraph>
          <p style={{textAlign: 'center',
                    marginBottom: '0.5em'}}><strong>Parking Management for Businesses and Property Owners</strong></p>
          Our cutting-edge platform allows property owners and business operators to monitor and manage their parking spaces with ease. We help you identify illegal parking and ensure that your parking spaces are utilized by your patrons, maximizing your revenue potential.
          <p style={{textAlign: 'center',
                    marginBottom: '0.5em',
                    marginTop: '0.8em'}}><strong>Easy Parking for Customers</strong></p>
          ParkEZ offers customers a seamless way to find available parking spaces at their favorite spots. By using our app or website, customers can check parking availability in real-time, making their shopping or dining experiences more enjoyable.
          <p style={{textAlign: 'center',
                    marginBottom: '0.5em',
                    marginTop: '0.8em'}}><strong>Advertising Opportunities</strong></p>
          Our platform offers local businesses an effective way to reach potential customers by displaying advertisements on our customer-facing website and app. This targeted approach increases visibility and drives more foot traffic to your establishment.
        </Paragraph>
      </RoundedRectangle>
      <SectionHeader>Our team</SectionHeader>
      <RoundedRectangle>
        <Paragraph>
          Our dedicated team of professionals includes talented developers, customer support specialists, and advertising management experts who work tirelessly to ensure that ParkEZ remains the best parking solution provider in the industry. With a deep understanding of our customers' needs, we continue to innovate and adapt to the ever-changing landscape of parking management.
        </Paragraph>
      </RoundedRectangle>
      <SectionHeader>Why choose ParkEz</SectionHeader>
      <RoundedRectangle>
      <Paragraph>
            <ul>
            <li>State-of-the-art technology that simplifies parking management and maximizes revenue</li>
            <li>User-friendly platform for businesses, property owners, and customers</li>
            <li>A dedicated customer support team available to address any issues or concerns</li>
            </ul>
          Join us on this exciting journey as we redefine parking experiences for businesses, property owners, and customers alike. With ParkEZ, parking has never been easier!
        </Paragraph>
      </RoundedRectangle>
    </AboutWrapper>
    </>
  );
};

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  text-align: justify;
  ul {
    width: 600px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 10px;
  }
  justify: right;

`;

const RoundedRectangle = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width:700px;
  margin-bottom: 1px;
`;

const SectionHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(10, 12, 138);
  text-align: center;
`;
const HeaderWrapper = styled.div`
  background-image: url(${myimg});
  background-size: 100vw;
  background-position: center;

  padding: 10px 10px;
  height: fit-content;
  width: 100%;
  gap: 40px;
  align-items: center;
  p{
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
    padding-bottom: 1em;

  }
  h1{
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    color:white;
    margin-top:10px;
    margin-bottom: 20px;
    font-size: 1.4em;
    
  }
`;

const AboutWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: #EEEEEE;

`;

export default About;