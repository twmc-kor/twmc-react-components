import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const DEFAULT_BACKGROUND_COLOR = '#3d84a8';

export default function Button(props) {
  const {
    children,
    mode,
    color = DEFAULT_BACKGROUND_COLOR,
    action,
    disabled = false,
  } = props;
  return (
    <Container mode={mode} action={action} disabled={disabled} {...props}>
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

  border: ${(props) => {
    if (props.mode === 'line') return '1px solid #f59f00';
    return 'none';
  }};
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.mode === 'line' || props.mode === 'text') return 'transparent';
    return '#f59f00';
  }};
  font: 600 22px 'Helvetica Neue';
  color: ${(props) => {
    if (props.mode === 'line' || props.mode === 'text') return '#f59f00';
    return '#fff';
  }};
  transition: ${(props) => (props.action ? 'all 0.8s' : 'none')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => {
      if (props.mode === 'line' || props.mode === 'text') return '#ffe8cc';
      if (props.disabled) return 'none';
      if (props.action === 'color') return '#ffd8a8';
      return '#f76707';
    }};
    color: ${(props) => {
      if (props.action === 'color') return '#d9480f';
    }};
    box-shadow: ${(props) => {
      if (props.action === 'slide') return '150px 0 0 0 rgba(0,0,0,0.3) inset';
      if (props.action === 'shadow')
        return '0 8px 16px 0 rgba(0, 0, 0, 0.5),0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }};
    border: ${(props) => {
      if (props.action === 'border') return '2px solid #f76707';
    }};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.989);
  }
  ${(props) => (props.disabled ? disabledStyle : null)}
`;

// disabled 받았을 때의 스타일링을 위한 component
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
  }
  cursor: not-allowed;
`;

Button.propType = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  mode: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.string,
};
