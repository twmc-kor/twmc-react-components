import React from 'react';
import {Button} from '../components';
import styled from 'styled-components';

function ButtonBoard() {
  return (
    <Content>
      <div>
        <P>Button - Normal</P>
        <Button mode="full">contained</Button>
        <Button mode="line">outlined</Button>
        <Button>text</Button>
        <Button mode="disabled">disabled</Button>
      </div>
      <div>
        <P>Button - Animation</P>
        <Button mode="shadow">Ani-1</Button>
        <Button mode="slide">Ani-2</Button>
        <Button mode="border">Ani-3</Button>
      </div>
      <div>
        <P>Button - Icon</P>
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

export default ButtonBoard;
