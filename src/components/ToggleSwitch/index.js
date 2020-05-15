import React from 'react';
import styled, {css} from 'styled-components';
import propTypes from 'prop-types';

const CommonContainerStyle = css`
  width: 50px;
  height: 26px;
`;

const ToggleStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  display: block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 3px;
  background: ${(props) => (props.headColor ? props.headColor : '#ffffff')};
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const Container = styled.div`
  position: relative;
  margin: 10px;
`;

const CheckboxLabel = styled.label`
  ${CommonContainerStyle}
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &::after {
    ${ToggleStyle}
  }
`;
const Checkbox = styled.input.attrs((props) => ({type: 'checkbox'}))`
  ${CommonContainerStyle}
  visibility: hidden;
  z-index: 1;
  margin: 0;
  &:checked + label {
    background: ${(props) => props.color || '#1876D2'};
    transition: 0.3s;
    &::after {
      ${ToggleStyle}
      transform: translateX(24px);
    }
  }
`;

export default function ToggleSwitch(props) {
  const id = `toggle-switch-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <Container>
      <Checkbox id={id} {...props} />
      <CheckboxLabel htmlFor={id} color={props.color} />
    </Container>
  );
}

ToggleSwitch.prototype = {
  color: propTypes.string,
  name: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func,
};
