import React from 'react';
import styled from 'styled-components';

export default function Button() {
  return (
    <Content>
      <div>
        <P>Button - Normal</P>
        <ButtonNormal full>BUTTON</ButtonNormal>
        <ButtonNormal line>BUTTON</ButtonNormal>
        <ButtonNormal>BUTTON</ButtonNormal>
      </div>
      <div>
        <P>Button - Animation</P>
        <ButtonAni>Click!</ButtonAni>
      </div>
      <div>
        <P>Button - Icon</P>
        <ButtonIcon>✔</ButtonIcon>
        <ButtonIcon>✖</ButtonIcon>
        <ButtonIcon>✚</ButtonIcon>
        <ButtonIcon>ↆ</ButtonIcon>
      </div>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.div`
  width: 260px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
`;

const ButtonNormal = styled.button`
  padding: 10px 35px;
  margin: 0 5px 10px 0;
  border: ${(props) => {
    if (props.line) return '2px solid #748ffc';
  }};
  border-style: ${(props) => (props.line ? 'solid' : 'hidden')};
  border-radius: 5px;
  font: 700 20px sans-serif;
  letter-spacing: 1px;
  color: ${(props) => (props.full ? '#fff' : '#748ffc')};
  background-color: ${(props) => (props.full ? '#748ffc' : '#fff')};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => (props.full ? '#91a7ff' : '#dbe4ff')};
  }
`;

const ButtonAni = styled.button`
  display: inline-block;
  padding: 10px 60px;
  margin-bottom: 10px;
  border-style: ${(props) => (props.center ? 'solid' : 'hidden')};
  border-radius: 5px;
  background-color: #748ffc;
  font: 700 20px sans-serif;
  letter-spacing: 1px;
  color: #fff;
  transition: all 0.5s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #91a7ff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
`;

const ButtonIcon = styled.button`
  padding: 20px 24px;
  margin: 0 7px 10px 0;
  background-color: #748ffc;
  border-style: hidden;
  border-radius: 50%;
  color: #fff;
  font: 900 20px sans-serif;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #91a7ff;
  }
`;
