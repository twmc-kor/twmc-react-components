import React from 'react';
import styled from 'styled-components';
import Spinner from '../components/Spinner';



function SpinnerBoard() {
  return (
    <Container>
        <h1>TypeA </h1>
      <Content>
      <Spinner size="small" type="typeA" huge/>
        <Spinner size="normal" type="typeA" />
        <Spinner size="big" type="typeA" />
      </Content>
      <h1>TypeB </h1>
      <Content>
      <Spinner size="small" type="typeB" />
        <Spinner size="normal" type="typeB" />
        <Spinner size="big" type="typeB" />
      </Content>
      <h1>TypeC </h1>
      <Content>
      <Spinner size="small" type="typeC" />
        <Spinner size="normal" type="typeC" />
        <Spinner size="big" type="typeC" />
      </Content>
    </Container>
  );
}

export default SpinnerBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
