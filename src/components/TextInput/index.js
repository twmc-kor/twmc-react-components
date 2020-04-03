import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  const {mode, children} = props;
  return(
      <Container mode={mode}>{children}</Container>
  )
}

const Container = styled.input`
  display: flex;
  width: 80%;
  padding: 12px 2px 12px 2px;
  background-color: ${(props) => (props.mode === 'filled'
  ? '#ecf0f1' : '#fff')};
  border: ${(props) => (props.mode === 'disabled'
  ? '1px solid #c0392b' : '0')};
  border-bottom: ${(props) => {
    if(props.mode === 'standard')
    return '1.75px solid #2f3542'
    if(props.mode === 'filled')
    return '1.75px solid #2f3542'
  }};
  border-radius: ${(props) => {
    if(props.mode === 'standard')
      return '0'
    if(props.mode === 'filled')
      return '7.5px 7.5px 0 0'
    if(props.mode === 'disabled')
      return '6px'
  }};
  outline: 0;
  font-size: 25px;
  `;