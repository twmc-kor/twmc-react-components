import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  const {
    mode,
    type,
    value,
    onChange,
    id,
    name,
    placeholder,
    autoComplete = 'off',
    children,
  } = props;
  return (
    <Container
      mode={mode}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}>
      {children}
    </Container>
  );
}

const Container = styled.input`
  width: 170px;
  border: ${(props) => {
    if (props.id === 'userid_1') return '0';
    if (props.id === 'userid_2') return '2.5px solid #a4b0be';
    if (props.id === 'userpwd_1') return '0';
    if (props.id === 'userpwd_2') return '2.5px solid #a4b0be';
  }};
  outline: 0;
  padding: ${(props) => {
    if (props.id === 'userid_1') return '0.5rem 0';
    if (props.id === 'userid_2') return '0.5rem 5px';
    if (props.id === 'userpwd_1') return '0.5rem 0';
    if (props.id === 'userpwd_2') return '0.5rem 5px';
  }};
  border-bottom: ${(props) => {
    if (props.id === 'userid_1') return '2px solid #70a1ff';
    if (props.id === 'userpwd_1') return '2px solid #ff6b81';
  }};
  box-shadow: none;
  font-size: 20px;
  color: black;
  &:focus ~ label,
  &:valid ~ label {
    font-size: 14px;
    top: -30px;
    color: ${(props) => {
      if (props.id === 'userid_1') return '#70a1ff';
      if (props.id === 'userpwd_1') return '#ff6b81';
    }};
  }
  ::placeholder {
    text-align: center;
    font-size: 15px;
    color: #34495e
  }
`;
