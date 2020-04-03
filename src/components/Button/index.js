import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const {mode, color, action, children} = props;
  return <Container mode={mode} color={color} action={action}>{children}</Container>;
}

const Container = styled.button`
  width: ${(props) => {
    if(props.mode === 'icon') return '75px';
    return '150px';
  }};
  height: ${(props) => {
    if(props.mode === 'icon') return '70px';
  }};
  padding: 10px;
  margin: 0 5px 10px 5px;
  border: ${(props) => {
    if (props.mode === 'line') return '2px solid #748ffc';
  }};
  border-style: ${(props) => (props.mode === 'line' ? 'solid' : 'hidden')};
  border-radius: ${(props) => {
    if(props.mode === 'icon') return '50%';
    return '5px';
  }};
  font: 700 20px sans-serif;
  letter-spacing: 1px;
  color: ${(props) => {
    if(props.mode === 'full') return '#fff';
    if(props.mode === 'line') return '#748ffc';
    if(props.mode === 'disabled') return '#ced4da';
    if(props.action === 'slide') return '#000';
    if(props.action === 'shadow') return '#fff';
    return '#748ffc';
  }};
  background-color: ${props => props.color};
  cursor: ${(props) => {
    if(props.mode === 'disabled') return 'not-allowed';
    return 'pointer';
  }};
  transition: ${(props) => {
    if(props.action === 'slide') return 'all 0.9s';
    if(props.action === 'shadow') return 'all 0.5s';
    if(props.action === 'border') return 'width 0.8s, height 0.8s';
    }};
  &:focus {
    outline: none;
  };
  &:hover {
    background-color: ${(props) => {
      if(props.mode === 'full') return '#91a7ff';
      if(props.mode === 'disabled') return 'none';
      if(props.action === 'slide') return '#3b5bdb';
      if(props.action === 'shadow') return '#364fc7';
      return '#dbe4ff';
    }};
    color: ${(props) => {
      if(props.action === 'slide') return '#fff';
    }};
    box-shadow: ${(props) => {
      if(props.action === 'slide') return '150px 0 0 0 rgba(0,0,0,0.5) inset';
      if(props.action === 'shadow') return '0 8px 16px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);'
    }};
    /* border: ${(props) => {
      if(props.action === 'border') return '1px solid #748ffc';
    }}; */
  };

  &::before,
  &::after {
    border: ${(props) => {
      if(props.action === 'border') return '1px solid #748ffc';
    }};
    width: ${(props) => {
      if(props.action === 'border') return '0';
    }};
    height: ${(props) => {
      if(props.action === 'border') return '0';
    }};
  }
`;