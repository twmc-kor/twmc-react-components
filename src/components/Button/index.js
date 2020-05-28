import React from 'react';
import styled, {css} from 'styled-components';
import propTypes from 'prop-types';

export default function Button(props) {
  
  const {
    children,
    mode,
    action,
    disabled = false,
  } = props;
  return (
    <Container
      mode={mode}
      action={action}
      {...props}>
      {children}
      {disabled && <DisabledContainer />}
    </Container>
  );
}
// contained를 기본스타일로 지정하기
const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  padding: 10px;
  margin: 10px 5px;
  border: ${props => {
    if(props.mode === "line") return "1px solid #f59f00"
    return "none"
  }};
  border-radius: 5px;
  background-color: ${props => {
    if(props.mode === "line" || props.mode === "text") return "transparent"
    return "#f59f00"
  }};
  font: 600 22px 'Helvetica Neue';
  color: ${props => {
    if(props.mode === "line" || props.mode === "text") return "#f59f00"
    return "#fff"
  }};
  transition: ${props => props.action ? 'all 0.9s' : 'none'};
  cursor: pointer;
  &:hover {
    background-color: ${props => {
      if(props.mode === "line" || props.mode === "text") return "#ffe8cc"
      if(props.disabled) return "none"
      if(props.action) return "#f76707"
      return "#ffc078"
    }};
    box-shadow: ${props => {
      if(props.action === "slide") return "150px 0 0 0 rgba(0,0,0,0.3) inset"
      if (props.action === 'shadow') return '0 8px 16px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }};
    border: ${props => {
      if(props.action === "border") return '2px solid #f76707'
    }};
  };
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.989);
  }
  &.active {
    background-color: ${props => {
      if(props.action === "change") return "#f76707"
    }};
  }
  ${props => (props.disabled ? disabledStyle : null)}
`;

const DisabledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background: #000;
  opacity: 0.5;
`;
const disabledStyle = css`
  &:active {
    transform: none;
  };
  cursor: not-allowed;
`;

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  mode: propTypes.string,
  action: propTypes.string,
  onClick: propTypes.func,
}