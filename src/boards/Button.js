import React, {useState} from 'react';
import {Button} from '../components';
import styled from 'styled-components';

function ButtonBoard({history}) {
  // 페이지 이동F
  const [state, setState] = useState('');

  function handleClick(e) {
    e.preventDefault();
    setState('Perfect!');
  }
  return (
    <Container>
      {/* Basic Style */}
      <Section>Basic Style</Section>
      <BasicContainer>
        <Button>contained</Button>
        <Button mode="line">outlined</Button>
        <Button mode="text">text</Button>
        <Button disabled>disabled</Button>
      </BasicContainer>
      {/* Basic Style */}
      {/* Have Function */}
      <Section>Have Function</Section>
      <FunctionContainer>
        <FunctionStyle>
          <Button
            action="shadow"
            onClick={() => {
              console.log('You clicked this Button.');
            }}>
            Button
          </Button>
          <FunctionExplain>개발자 모드에 출력내용 표시하기</FunctionExplain>
        </FunctionStyle>
        <FunctionStyle>
          <Button
            action="slide"
            onClick={() => {
              const message = window.confirm('Did you click this Button?');
              if (message === true) return console.log('Ok :)');
              else if (message === false)
                return console.log('try again :(');
            }}>
            Button
          </Button>
          <FunctionExplain>확인 알림창 표시하기</FunctionExplain>
        </FunctionStyle>
        <FunctionStyle>
          <Button action="color" onClick={handleClick}>
            Button
          </Button>
          <FunctionExplain>화면에 출력내용 표시하기 {state}</FunctionExplain>
        </FunctionStyle>
        <FunctionStyle>
          <Button
            action="border"
            onClick={() => {
              history.push('/');
              console.log('Move to "Overview"!');
            }}>
            Button
          </Button>
          <FunctionExplain>페이지 이동하기</FunctionExplain>
        </FunctionStyle>
      </FunctionContainer>
      {/* Have Function */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const BasicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FunctionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Section = styled.div`
  margin: 30px 0 15px;
  color: #112d4e;
  font: 300 30px 'Bangers', cursive;
  letter-spacing: 0.1em;
`;
const FunctionStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
`;
const FunctionExplain = styled.div`
  margin-left: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export default ButtonBoard;
