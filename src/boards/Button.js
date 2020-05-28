import React, {useState} from 'react';
import {Button} from '../components';
import styled from 'styled-components';

function ButtonBoard({history}) {
  const [state, setState] = useState('')

  function handleClick(e) {
    e.preventDefault();
    setState('성공!');
  }
  return (
    <Container>
      <Section>Basic Style</Section>
      <BasicContainer>
        <Button>contained</Button>
        <Button mode="line">outlined</Button>
        <Button mode="text">text</Button>
        <Button disabled>disabled</Button>
      </BasicContainer>
      <Section>Have Function</Section>
      <FunctionContainer>
        <FunctionStyle>
          <Button action="shadow" onClick={() => {
            console.log("개발자 모드입니다. 클릭!")
          }}>Button</Button>
          <FunctionExplain>개발자 모드에 출력내용 표시하기</FunctionExplain>
        </FunctionStyle>
        <FunctionStyle>
          <Button action="slide" onClick={() => {
            const message = window.confirm('삭제하시겠습니까?')
            if(message === true) return console.log("삭제되었습니다.")
            else if(message === false) return console.log("작업을 취소하였습니다.");
          }}>Button</Button>
          <FunctionExplain>확인 알림창 표시하기</FunctionExplain>
        </FunctionStyle>
        <FunctionStyle>
          <Button action="change" onClick={handleClick}>Button</Button>
          <FunctionExplain>화면에 출력내용 표시하기 {state}</FunctionExplain>
        </FunctionStyle>
        <FunctionStyle>
          <Button action="border" onClick={() => {
            history.push('/')
            console.log("메인페이지로 이동!")
          }}>Button</Button>
          <FunctionExplain>페이지 이동하기</FunctionExplain>
        </FunctionStyle>
      </FunctionContainer>
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
