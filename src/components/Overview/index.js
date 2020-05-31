import React from 'react';
import styled from 'styled-components';

function Overview() {
  return (
    <Container>
      <Hello>
        Hello, World!
        <br />
        We are Front-end Developer.
      </Hello>
      <DevelopMember>
        <ProfileImg src="/img/eunji.JPG" alt="LEEEUNJI profile img"/>
        <Profile>
          <MemberName>Lee Eun Ji</MemberName>
          <ContactLink href="https://github.com/deveassy/twmc-react-components"><img src="/img/github.png" alt="github" style={{width:21, height:21, marginRight:4}} /> GITHUB</ContactLink>
          <ContactLink href="https://velog.io/@eassy"><img src="/img/velog.jpg" alt="velog" style={{width:19, height:19, marginRight:5}} />VELOG</ContactLink>
          <ContactLink style={{fontSize:20}}>dev.eass7@gmail.com</ContactLink>
        </Profile>
      </DevelopMember>
      <DevelopMember>
        <ProfileImg src="/img/moon.JPG" alt="JANGMOONWON profile img"/>
        <Profile>
          <MemberName>Jang Moon Won</MemberName>
          <ContactLink href="https://github.com/jangmoonwon/twmc-react-components"><img src="/img/github.png" alt="github" style={{width:21, height:21, marginRight:4}} /> GITHUB</ContactLink>
          <ContactLink href="https://velog.io/@jangmoonwon"><img src="/img/velog.jpg" alt="velog" style={{width:19, height:19, marginRight:5}} />VELOG</ContactLink>
          <ContactLink style={{fontSize:20}}>muneon96@gmail.com</ContactLink>
        </Profile>
      </DevelopMember>
      <OverviewMessage>
        This Project is to modularzing our 
        <br />
        <strong>own components</strong> that can be used externally.
        <br />
        Then, Have fun ☺︎
      </OverviewMessage>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 500px;
`;
const Hello = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font: 500 27px 'Chelsea Market', cursive;
`;
const DevelopMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -30px 10px 0;
  padding: 10px 0;
`;
const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #000;
  border-radius: 50%;
`;
const MemberName = styled.p`
  margin: 5px;
  font: 800 25px 'Chelsea Market', cursive;
  text-shadow: 1px 1px 1px #000;
`;
const ContactLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 5px;
  text-decoration: none;
  color: #000;
  font-family: 'Chelsea Market', cursive;
  &:hover {
    color: #e23e57;
  }
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 250px;
  font-size: 25px;
`;
const OverviewMessage = styled.div`
  position: absolute;
  top: 370px;
  left: 20px;
  margin-top: 15px;
  font: 300 25px 'Chelsea Market', cursive;
`;

export default Overview;
