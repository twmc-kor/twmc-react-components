import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultColor = '#666';

export default function Tooltip(props) {
  const {color = DefaultColor, mode, label, direction, children} = props;
  return (
    <Container>
      <TooltipBox>
        {children}
        <TooltipText color={color} mode={mode} direction={direction}>
          {label}
        </TooltipText>
      </TooltipBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TooltipBox = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  font: 800 30px 'sans-seridf';
  &:hover {
    & > span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const TooltipText = styled.span`
  position: absolute;
  visibility: hidden;
  /* bottom: 130%;
  left: 50%; */

  top: ${(props) => {
    if (props.direction === 'bottom') return '130%';
  }};
  bottom: ${(props) => {
    if (!props.direction) return '130%';
  }};
  left: ${(props) => {
    if (props.direction === 'left') return '-60%';
    if (props.direction === 'bottom') return '50%';
    if (props.direction === 'right') return '150%';
    return '50%';
  }};

  padding: 5px 10px;
  margin-left: -60px;
  background-color: ${(props) => {
    if (props.mode === 'dark') return '#f5f5f5';
    return props.color;
  }};
  font: 500 15px 'sans-serif';
  color: ${(props) => {
    if (props.mode === 'dark') return '#333';
    return '#fff';
  }};
  text-align: center;
  border-radius: 6px;
  opacity: 0;
  transition: all 0.5s;

  &::after {
    content: '';
    position: absolute;

    top: ${(props) => {
      if (props.direction === 'left' || props.direction === 'right')
        return '10px';
      if (props.direction === 'bottom') return '-10px';
      return '100%';
    }};
    left: ${(props) => {
      if (props.direction === 'bottom') return '50%';
      if (props.direction === 'right') return '-5px';
      if (props.direction === 'left') return '126px';
      return '50%';
    }};

    /* top: 100%;
    left: 50%; */
    margin-left: -5px;
    border: ${(props) => {
      if (props.mode === 'dark') return '5px solid #f5f5f5';
      return '5px solid #666';
    }};
    border-color: ${(props) => {
      // 어두운 모드
      if (props.mode === 'dark' && !props.direction)
        return '#f5f5f5 transparent transparent transparent';
      if (props.mode === 'dark' && props.direction === 'bottom')
        return 'transparent transparent #f5f5f5 transparent';
      if (props.mode === 'dark' && props.direction === 'left')
        return 'transparent transparent transparent #f5f5f5';
      if (props.mode === 'dark' && props.direction === 'right')
        return 'transparent #f5f5f5 transparent transparent';

      // 밝은모드
      if (props.direction === 'top')
        return '#666 transparent transparent transparent';
      if (props.direction === 'bottom')
        return 'transparent transparent #666 transparent';
      if (props.direction === 'left')
        return 'transparent transparent transparent #666';
      if (props.direction === 'right')
        return 'transparent #666 transparent transparent';
      return '#666 transparent transparent transparent ';
    }};
  }
`;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  mode: PropTypes.string,
  direction: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
