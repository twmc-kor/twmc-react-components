import React from 'react';
import {Button} from '../components';
import styled from 'styled-components';

function ButtonBoard() {
  return (
    <Content>
      <div>
        <P>Button - Normal</P>
        <Button mode="full">FULL</Button>
        <Button mode="line">LINE</Button>
        <Button>NORMAL</Button>
      </div>
      <div>
        <P>Button - Animation</P>
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
`;

export default ButtonBoard;
