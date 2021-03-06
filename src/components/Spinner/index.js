import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import propTypes from 'prop-types';

const EffectA = keyframes`
0% {
   transform: rotate(0deg);
 }
 100% {
   transform: rotate(360deg);
 }
`;

const EffectB = keyframes`
  0% { 
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
`;

const EffectC = keyframes`
0% {
  transform: perspective(120px) rotateX(0deg) rotateY(0deg);
}
50% {
  transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
}
100% {
  transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
}
`;

const CommonStyleCss = css`
  width: ${({size}) => size};
  height: ${({size}) => size};
`;

const StyledSpinner = styled.div`
  ${CommonStyleCss}
  ${(props) =>
    props.type === 'typeA' &&
    css`
      background-color: transparent;
      border: 4.5px solid #ff9a76;
      border-radius: 50%;
      border-top-color: rgba(209, 205, 205, 0.6);
      border-bottom-color: rgba(209, 205, 205, 0.6);
      border-right-color: rgba(209, 205, 205, 0.6);
      animation: ${EffectA} 2000ms infinite;
    `};
  ${(props) =>
    props.type === 'typeB' &&
    css`
      background-color: #ff9a76;
      border-radius: 50%;
      animation: ${EffectB} 1s infinite ease-in-out;
    `};
  ${(props) =>
    props.type === 'typeC' &&
    css`
      background-color: #ff9a76;
      border-radius: 0;
      animation: ${EffectC} 1.5s infinite ease-in-out;
    `};
`;

export default function Spinner(props) {
  const {size, type} = props;

  const convertSize = React.useMemo(() => {
    if (size === 'small') return '30px';
    if (size === 'normal') return '45px';
    if (size === 'big') return '70px';
    return typeof size === 'number' ? `${size}px` : '30px';
  }, [size]);
  return (
    <Container>
      <StyledSpinner size={convertSize} type={type} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;
`;

Spinner.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  type: propTypes.oneOf(['typeA', 'typeB', 'typeC']),
};

Spinner.defaultProps = {
  size: '30px',
  type: 'typeA',
};
