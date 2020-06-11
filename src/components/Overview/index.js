import React from 'react';
import styled from 'styled-components';

function Overview() {
  return (
    <Container>
      <OverviewMessage style={{top: 0}}>
        Hello, World!
        <br />
        We are couple Front-end Developer.
      </OverviewMessage>
      <DevelopMember>
        <ProfileContainer>
          <ProfileImg src="/img/eunji.JPG" alt="LEEEUNJI profile img" />
          <MemberName>Lee Eun Ji</MemberName>
        </ProfileContainer>
        <ContactLinkContainer>
          <ContactLink href="https://github.com/deveassy/twmc-react-components">
            <img
              src="/img/github.png"
              alt="github"
              style={{width: 21, height: 21, marginRight: 4}}
            />{' '}
            GITHUB
          </ContactLink>
          <ContactLink href="https://velog.io/@eassy">
            <img
              src="/img/velog.jpg"
              alt="velog"
              style={{width: 19, height: 19, marginRight: 5}}
            />
            VELOG
          </ContactLink>
          <ContactLink style={{fontSize: 20, cursor: 'default'}}>
            dev.eass7@gmail.com
          </ContactLink>
        </ContactLinkContainer>
      </DevelopMember>
      <DevelopMember>
        <ProfileContainer>
          <ProfileImg src="/img/moon.JPG" alt="JANGMOONWON profile img" />
          <MemberName>Jang Moon Won</MemberName>
        </ProfileContainer>
        <ContactLinkContainer>
          <ContactLink href="https://github.com/jangmoonwon/twmc-react-components">
            <img
              src="/img/github.png"
              alt="github"
              style={{width: 21, height: 21, marginRight: 4}}
            />{' '}
            GITHUB
          </ContactLink>
          <ContactLink href="https://velog.io/@jangmoonwon">
            <img
              src="/img/velog.jpg"
              alt="velog"
              style={{width: 19, height: 19, marginRight: 5}}
            />
            VELOG
          </ContactLink>
          <ContactLink style={{fontSize: 20, cursor: 'default'}}>
            muneon96@gmail.com
          </ContactLink>
        </ContactLinkContainer>
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
const OverviewMessage = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  margin-top: 15px;
  font: 300 25px 'Chelsea Market', cursive;
  cursor: default;
`;
const DevelopMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -30px 10px 0;
  padding: 10px 0;
`;
const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;
const ProfileImg = styled.img`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transition: all 0s linear;
  &:hover {
    transform: scale(1.4);
    transition: all 0s linear;
    border: 5px solid #ff9a00;
  }
`;
const MemberName = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  bottom: -15px;
  margin: 5px;
  padding: 5px 0;
  background-color: #ff9a00;
  font: 800 25px 'Chelsea Market', cursive;
  text-shadow: 1px 1px 1px #000;
`;
const ContactLinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 10px 0 -160px;
  font-size: 25px;
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

export default Overview;
