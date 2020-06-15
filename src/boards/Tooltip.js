import React from 'react';
import Tooltip from '../components/Tooltip';
import styled from 'styled-components';

export default function TooltipBoard() {
  return (
    <Container>
      <Tooltip color>
        이게 툴팁입니다. 알겠습니까? 만드는중이라고요 좀 기다려봐요
      </Tooltip>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
