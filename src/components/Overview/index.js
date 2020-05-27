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
      <Dev>
        <Img src="/img/eunji.JPG" alt="LEEEUNJI profile img"/>
        <Contact>
          <Name>Lee Eun Ji</Name>
          <P href="https://github.com/deveassy/twmc-react-components"><img src="/img/github.png" alt="github" style={{width:25, height:25}} /> GITHUB</P>
          <P href="https://velog.io/@eassy"><img src="/img/velog.jpg" alt="velog" style={{width:24, height:24}} /> VELOG</P>
        </Contact>
      </Dev>
      <Dev>
        <Img src="/img/moon.JPG" alt="JANGMOONWON profile img"/>
        <Contact>
          <Name>Jang Moon Won</Name>
          <P href="https://github.com/jangmoonwon/twmc-react-components"><img src="/img/github.png" alt="github" style={{width:25, height:25}} /> GITHUB</P>
          <P href="https://velog.io/@jangmoonwon"><img src="/img/velog.jpg" alt="velog" style={{width:24, height:24}} /> VELOG</P>
        </Contact>
      </Dev>
      <Text>
        This Project is to modularzing our 
        <br />
        <strong>own components</strong> that can be used externally.
        <br />
        Then, Have fun ☺︎
      </Text>
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
const Dev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -50px 10px 0;
  padding: 10px 0;
`;
const Img = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #000;
  border-radius: 50%;
`;
const Name = styled.p`
  margin: 5px;
  font: 800 25px 'Chelsea Market', cursive;
  text-shadow: 1px 1px 1px #000;
`;
const P = styled.a`
  font-size: 23px;
  margin: 5px;
  text-decoration: none;
  color: #000;
  font-family: 'Chelsea Market', cursive;
  &:hover {
    color: #e23e57;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 250px;
  font-size: 25px;
`;
const Text = styled.div`
  position: absolute;
  top: 370px;
  left: 20px;
  margin-top: 10px;
  font: 300 25px 'Chelsea Market', cursive;
`;

export default Overview;
