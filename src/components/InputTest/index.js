import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  width: 170px;
  height: ${({size}) => size};
  background-color: ${({variant}) =>
    variant === 'filled' ? '#dddddd' : 'transparent'};
  border: ${({variant}) =>
    variant === 'outlined' ? '1.5px solid #4d3e3e' : '0'};
  border-top-left-radius: ${({variant}) =>
    variant === 'filled' ? '5px' : '0'};
  border-top-right-radius: ${({variant}) =>
    variant === 'filled' ? '5px' : '0'};
  border-bottom: 2px solid #4d3e3e;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export default function InputTest(props) {
  const {type, size, variant, name, autocomplete} = props;

  const convertSize = React.useMemo(() => {
    if (size === 'small') return '35px';
    if (size === 'normal') return '40px';
    if (size === 'big') return '50px';
    return typeof size === 'number' ? `${size}px` : '40px';
  }, [size]);

  return (
    <Container>
      <StyledInput
        size={convertSize}
        variant={variant}
        type={type}
        name={name}
        autocomplete={autocomplete}
      />
    </Container>
  );
}

InputTest.propTypes = {
  name: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(['standard', 'filled', 'outlined']),
};

const Container = styled.div`
  position: relative;
  margin: 15px;
`;
