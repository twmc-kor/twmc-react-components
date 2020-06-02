import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  width: 200px;
  height: ${({size}) => size};
  background-color: ${({variant}) =>
    variant === 'filled' ? '#d3dde3' : 'transparent'};
  border: ${({variant}) =>
    variant === 'outlined' ? '2px solid #95afc0' : '0'};
  border-top-left-radius: ${({variant}) =>
    variant === 'filled' ? '5px' : '0'};
  border-top-right-radius: ${({variant}) =>
    variant === 'filled' ? '5px' : '0'};
  border-bottom: 2px solid #95afc0;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    border: ${({variant}) => {
      if (variant === 'outlined') return '2px solid #cf8f8f';
    }};
    border-bottom: ${({variant}) => {
      if (variant === 'standard' || variant === 'filled')
        return '2px solid #cf8f8f';
    }};
    transition: 0.5s;
  }
  &:focus {
    outline: none;
  }
`;

export default function TextInput(props) {
  const {type, size, variant, name, label, autocomplete} = props;

  const convertSize = React.useMemo(() => {
    if (size === 'small') return '40px';
    if (size === 'normal') return '45px';
    if (size === 'big') return '55px';
    return typeof size === 'number' ? `${size}px` : '45px';
  }, [size]);

  return (
    <Container>
      <StyledInput
        size={convertSize}
        variant={variant}
        type={type}
        name={name}
        label={label}
        autocomplete={autocomplete}
      />
    </Container>
  );
}

TextInput.propTypes = {
  name: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(['standard', 'filled', 'outlined']),
};

const Container = styled.div`
  position: relative;
  margin: 15px;
`;
