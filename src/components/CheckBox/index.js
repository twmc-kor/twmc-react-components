import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckboxContainer = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
`;

const StyledIcon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 3px;
  width: 100%;
  height: 100%;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background: ${({checked, colorSet}) =>
    checked ? colorSet.ACTIVE_BACKGROUND : colorSet.INACTIVE_BACKGROUND};
  border-radius: 3px;
  transition: all 130ms;
  box-shadow: 0 0 0 2px ${({colorSet}) => colorSet.INACTIVE_BORDER};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${({colorSet}) => colorSet.ACTIVE_BORDER};
  }
`;

const CheckboxItemContainer = styled.div`
  width: 20px;
  height: 20px;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

export default function CheckBox(props) {
  const {
    onClick,
    asset,
    value = false,
    inActiveBackgroundColor = 'papayawhip',
    activeBackgroundColor = '#fab1a0',
    inActiveBorderColor = '#ddd',
    activeBorderColor = '#ff7675',
  } = props;

  const CheckboxItem = () => (
    <CheckboxItemContainer checked={value}>
      {asset || (
        <StyledIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </StyledIcon>
      )}
    </CheckboxItemContainer>
  );

  const COLOR_SET = React.useMemo(() => {
    return {
      INACTIVE_BACKGROUND: inActiveBackgroundColor,
      ACTIVE_BACKGROUND: activeBackgroundColor,
      INACTIVE_BORDER: inActiveBorderColor,
      ACTIVE_BORDER: activeBorderColor,
    };
  }, [
    inActiveBackgroundColor,
    activeBackgroundColor,
    inActiveBorderColor,
    activeBorderColor,
  ]);

  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} onClick={(e) => onClick(e.target.checked)} />
      <StyledCheckbox checked={value} colorSet={COLOR_SET}>
        <CheckboxItem />
      </StyledCheckbox>
      {props.label}
    </CheckboxContainer>
  );
}

CheckBox.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  asset: PropTypes.element,
  inActiveBackgroundColor: PropTypes.string,
  activeBackgroundColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  inActiveBorderColor: PropTypes.string,
  label: PropTypes.element.isRequired,
};
