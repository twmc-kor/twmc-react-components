import React from 'react';
import styled from 'styled-components';

function Overview() {
  return (
    <Container>
      <Hello style={{position:"absolute", top:-10, left:-10}}>Hello, World!</Hello>
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
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hello = styled.div`
  position: absolute;
  top: -10;
  left: -10;
  font: 500 20px 'Chelsea Market', cursive;
`;
const Dev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 20px 0;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid #000;
  border-radius: 50%;
`;
const Name = styled.p`
  font: 800 25px 'Chelsea Market', cursive;
  text-shadow: 1px 1px 1px #000;
`;
const P = styled.a`
  font-size: 23px;
  margin: 10px;
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
  width: 250px;
  font-size: 25px;
`;

export default Overview;
