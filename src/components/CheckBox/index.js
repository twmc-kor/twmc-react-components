import React from 'react';
import styled from 'styled-components';

export default function CheckBox(props) {
  const {
    isClickA,
    isClickB,
    isClickC,
    hidden,
    // isClickD,
    // isClickE,
    // isClickF,
    checked = false,
  } = props;
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        {...props}
        hidden={hidden}
        onClick={(e) => {
          if (isClickA !== undefined) isClickA(e.target.checked);
          if (isClickB !== undefined) isClickB(e.target.checked);
          if (isClickC !== undefined) isClickC(e.target.checked);
          // if (isClickD !== undefined) isClickD(e.target.checked);
          // if (isClickE !== undefined) isClickE(e.target.checked);
          // if (isClickF !== undefined) isClickF(e.target.checked);
        }}
      />
      {/* checkbox 스타일링 된 부분 */}
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  vertical-align: middle;
  margin-right: 10px;
`;

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  display: ${(props) => (props.hidden ? 'none' : null)};
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  background: ${(props) => (props.checked ? '#fab1a0' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
