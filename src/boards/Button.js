import React from 'react';
import {Button} from '../components';
import styled from 'styled-components';

function ButtonBoard() {
  return (
    <Content>
        <P>Button - Normal</P>
        <Div>
        <Button mode="full" color>FULL</Button>
        <Button mode="line">LINE</Button>
        <Button onClick={() => console.log("이게 기본스타일이에요")}>NORMAL</Button>
      </Div>
      <div style={{marginTop: 20}}>
        <P>Button - what i used in 'Side project'</P>
        <Button mode="used" color size="big">로그인</Button>
        <Button mode="used" color size="small">나의 위치 확인</Button>
        <Button mode="used" color size="small">최근 전적 확인</Button>
        <Button mode="used" color size="small">로그아웃</Button>
      </div>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
`;
const P = styled.div`
  width: 500px;
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
`;

export default ButtonBoard;
