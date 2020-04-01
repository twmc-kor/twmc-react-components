import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const {mode} = props;
  return <Container mode={mode}>Button</Container>;
}

const Container = styled.button`
  padding: 10px 35px;
  margin: 0 5px 10px 0;
  border: ${(props) => {
    if (props.mode === 'line') return '2px solid #748ffc';
  }};
  border-style: ${(props) => (props.mode === 'line' ? 'solid' : 'hidden')};
  border-radius: 5px;
  font: 700 20px sans-serif;
  letter-spacing: 1px;
  color: ${(props) => (props.mode === 'full' ? '#fff' : '#748ffc')};
  background-color: ${(props) => (props.mode === 'full' ? '#748ffc' : '#fff')};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.mode === 'full' ? '#91a7ff' : '#dbe4ff'};
  }
`;