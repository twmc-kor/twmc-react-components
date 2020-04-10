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
    disabled,
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
      autoComplete={autoComplete}
      disabled={disabled}>
      {children}
    </Container>
  );
}

const Container = styled.input`
  width: 170px;
  border: ${(props) => {
    if (props.id === 'userid_1') return '0';
    if (props.id === 'userid_2') return '2.5px solid #a4b0be';
    if (props.id === 'userid_3') return '1.5px solid #c0392b';
    if (props.id === 'userpwd_1') return '0';
    if (props.id === 'userpwd_2') return '2.5px solid #a4b0be';
    if (props.id === 'userpwd_3') return '1.5px solid #c0392b';
  }};
  border-bottom: ${(props) => {
    if (props.id === 'userid_1') return '2.5px solid #70a1ff';
    if (props.id === 'userpwd_1') return '2.5px solid #ff6b81';
  }};
  border-radius: ${(props) => {
    if (props.id === 'userid_3') return '3.5px';
    if (props.id === 'userpwd_3') return '3.5px';
  }};
  outline: 0;
  margin-left: ${(props) => {
    if (props.id === 'userid_3') return '30px';
    if (props.id === 'userpwd_3') return '30px';
  }};
  padding: ${(props) => {
    if (props.id === 'userid_1') return '0.5rem 0';
    if (props.id === 'userid_2') return '0.5rem 5px';
    if (props.id === 'userpwd_1') return '0.5rem 0';
    if (props.id === 'userpwd_2') return '0.5rem 5px';
  }};
  box-shadow: none;
  font-size: 20px;
  color: black;
  &:focus ~ label,
  &:valid ~ label {
    font-size: 14px;
    top: -25px;
    color: ${(props) => {
      if (props.id === 'userid_1') return '#70a1ff';
      if (props.id === 'userpwd_1') return '#ff6b81';
    }};
  }
  ::placeholder {
    text-align: center;
    font-size: 15px;
    color: ${(props) => {
      if (props.id === 'userid_2') return '#34495e';
      if (props.id === 'userid_3') return '#c0392b';
      if (props.id === 'userpwd_2') return '#34495e';
      if (props.id === 'userpwd_3') return '#c0392b';
    }};
  }
  :focus {
    border: ${(props) => {
      if (props.id === 'userid_2') return '2.5px solid #70a1ff';
      if (props.id === 'userpwd_2') return '2.5px solid #ff6b81';
    }};
  }
  transition: 0.5s;
`;
