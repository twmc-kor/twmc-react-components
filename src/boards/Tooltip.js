import React from 'react';
import Tooltip from '../components/Tooltip';
import styled from 'styled-components';

export default function TooltipBoard() {
  return (
    <Container>
      <Tooltip />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
