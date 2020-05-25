import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    mode, 
    color,
    size,
    children,
    disabled = false,
  } = props;
  return (
  <Container mode={mode} color={color} size={size} {...props}>
    {children}
    {disabled && <DisabledContainer />}
  </Container>
  );
}

const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding: 10px 35px; */
  padding: 12px 0;
  margin: 0 5px 10px 0;
  width: ${props => {
    if(props.size === "big") return "320px"
    if(props.size === "small") return "30vh"
    return "180px"
  }};
  border: ${(props) => {
    if (props.mode === 'line') return '2px solid #748ffc';
  }};
  border-style: ${(props) => (props.mode === 'line' ? 'solid' : 'hidden')};
  border-radius: ${props => {
    if(props.size === "small") return "0"
    return "5px"
  }};
  font: ${props => {
    if(props.size === "small") return "500 18px sans-serif"
    return "700 20px sans-serif"
  }};
  letter-spacing: 1px;
  color: ${(props) => {
    if(props.color) return "#fff"
    return "#748ffc"}
  };
  background-color: ${(props) => {
    if(props.mode === "full") return "#748ffc"
    if(props.mode === "used") return "#00909e"
    return "#fff"}
  };
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => {
      if(props.mode === "full") return "#91a7ff"
      if(props.mode === "used") return "none"
      return "#dbe4ff"
    }};
  };
  &:active {
    transform: scale(0.985);
  }
  ${props => props.disabled ? disabledStyle : null}
`;

const disabledStyle = css`
  &:active {
    transform: none;
  };
  cursor: not-allowed;
`;

const DisabledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: #000;
  border-radius: 5px;
  opacity: 0.4;
`;

Button.propTypes = {
  mode: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}