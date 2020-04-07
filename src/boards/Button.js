import React from 'react';
import {Button} from '../components';
import styled from 'styled-components';

function ButtonBoard() {
  // const [click, onClickAlert ] = ustState(false);
    
  return (
    <Content>
      <div> {/* mode: default값은 contained | color: 배경색을 기준으로 함 */}
        <P>Button - Normal</P>
        <Button mode="full" color="#748ffc">contained</Button>
        <Button mode="line">outlined</Button>
        <Button>text</Button>
        <Button mode="disabled" color="#868e96" disabled>disabled</Button>
      </div>
      <div>
        <P>Button - Animation</P>
        <Button action="shadow" color="#748ffc">Ani-1</Button>
        <Button action="slide" color="#748ffc">Ani-2</Button>
        <Button action="border">Ani-3</Button>
      </div>
      <div>
        <P>Button - Icon</P>
        <Button mode="icon"><Img src="/img/check.png" /></Button>
        <Button mode="icon"><Img src="/img/download.png" /></Button>
        <Button mode="icon"><Img src="/img/close.png" /></Button>
        <Button mode="icon"><Img src="/img/trash.png" /></Button>
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
  cursor: default;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export default ButtonBoard;
