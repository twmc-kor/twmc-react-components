import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledImage = styled.img`
  width: ${({size}) => size};
  height: ${({size}) => size};
  padding: 5px;
  border-radius: ${({variant}) => {
    if (variant === 'circle') return '50%';
    if (variant === 'rounded') return '7px';
    return 0;
  }};
  background-color: #dae1e7;
`;

export default function ProfileImage(props) {
  const {src, size, variant} = props;

  const convertSize = React.useMemo(() => {
    if (size === 'small') return '50px';
    if (size === 'normal') return '100px';
    if (size === 'big') return '120px';
    return typeof size === 'number' ? `${size}px` : '50px';
  }, [size]);

  return (
    <Container>
      <StyledImage src={src} size={convertSize} variant={variant} />
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
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(['circle', 'rounded']),
};
