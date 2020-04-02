import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const {mode, children} = props;
  return <Container mode={mode}>{children}</Container>;
}

const Container = styled.button`
  width: 150px;
  padding: 10px;
  margin: 0 5px 10px 5px;
  border: ${(props) => {
    if (props.mode === 'line') return '2px solid #748ffc';
  }};
  border-style: ${(props) => (props.mode === 'line' ? 'solid' : 'hidden')};
  border-radius: 5px;
  font: 700 20px sans-serif;
  letter-spacing: 1px;
  color: ${(props) => {
    if(props.mode === 'full') return '#fff';
    if(props.mode === 'line') return '#748ffc';
    if(props.mode === 'disabled') return '#ced4da';
    if(props.mode === 'slide') return '#000';
    if(props.mode === 'shadow') return '#fff';
    return '#748ffc';
  }};
  background-color: ${(props) => {
    if(props.mode === 'full') return '#748ffc';
    if(props.mode === 'disabled') return '#868e96';
    if(props.mode === 'slide') return '#748ffc';
    if(props.mode === 'shadow') return '#748ffc';
    return '#fff';
  }};
  cursor: ${(props) => {
    if(props.mode === 'disabled') return 'not-allowed';
    return 'pointer';
  }};
  transition: ${(props) => {
    if(props.mode === 'slide') return 'all 0.9s';
    if(props.mode === 'shadow') return 'all 0.5s';
    if(props.mode === 'border') return 'width 0.8s, height 0.8s';
    }};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => {
      if(props.mode === 'full') return '#91a7ff';
      if(props.mode === 'disabled') return 'none';
      if(props.mode === 'slide') return '#3b5bdb';
      if(props.mode === 'shadow') return '#364fc7';
      return '#dbe4ff';
    }};
    color: ${(props) => {
      if(props.mode === 'slide') return '#fff';
    }};
    box-shadow: ${(props) => {
      if(props.mode === 'slide') return '150px 0 0 0 rgba(0,0,0,0.5) inset';
      if(props.mode === 'shadow') return '0 8px 16px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);'
    }};
    border: ${(props) => {
      if(props.mode === 'border') return '1px solid #748ffc';
    }};
  }
`;