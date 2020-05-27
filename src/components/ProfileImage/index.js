import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const IMAGE_SIZE = {
  small: '50px',
  normal: '100px',
  big: '120px',
};

const StyledImage = styled.img`
  width: ${({size}) => IMAGE_SIZE[size]};
  height: ${({size}) => IMAGE_SIZE[size]};
  padding: 5px;
  border-radius: ${({variant}) => {
    if (variant === 'circle') return '50%';
    if (variant === 'rounded') return '7px';
    return 0;
  }};
  background-color: #dae1e7;
`;

export default function ProfileImage(props) {
  const {src = '', size = '', variant = ''} = props;
  return (
    <Container>
      <StyledImage src={src} size={size} variant={variant} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;
`;

ProfileImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  size: propTypes.oneOf(['small', 'normal', 'big']),
  variant: propTypes.oneOf(['circle', 'rounded', 'square']),
};
