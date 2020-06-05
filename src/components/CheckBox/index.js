import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function CheckBox(props) {
  const {onClick, asset, value = false} = props;
  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} onClick={(e) => onClick(e.target.checked)} />
      <StyledCheckbox checked={value} asset={asset}>
        {asset || (
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        )}
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  vertical-align: middle;
  margin-right: 10px;
`;

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
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
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: ${(props) => (props.checked ? '#fab1a0' : 'papayawhip')};
  border-radius: 3px;
  transition: all 130ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px #ff7675;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
  ${(props) => props.asset} {
    visibility: ${(props) => (props.checked ? 'visible' : 'inherit')};
  }
`;

CheckBox.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  asset: PropTypes.element,
};
