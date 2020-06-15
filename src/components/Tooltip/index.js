import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './style.css';

export default function Tooltip(props) {
  const {color, children} = props;
  return (
    <Container className="tooltip">
      Hover me!
      <TooltipText className="tooltipText" color={color}>
        {children}
      </TooltipText>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 200px;
  height: 50px;
  text-align: center;
  background-color: tomato;
  border-bottom: 1px dotted black;
  font: 800 30px 'sans-seridf';
`;
const TooltipText = styled.span`
  z-index: 1;
  position: absolute;
  visibility: hidden;
  bottom: 130%;
  left: 50%;
  width: 200px;
  padding: 5px 0;
  margin-left: -60px;
  background-color: ${(props) => (props.color ? 'blue' : 'tomaot')};
  font: 500 15px 'sans-serif';
  color: #fff;
  text-align: center;
  border-radius: 6px;
  opacity: 0;
  transition: all 0.5s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid blue;
    border-color: blue transparent transparent transparent;
  }
`;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};
