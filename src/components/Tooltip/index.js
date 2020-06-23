import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './style.css';

export default function Tooltip(props) {
  const {color, mode, label, children} = props;
  // const colorProps = useMemo(() => {
  //   if(mode === "bright") return "#666"
  //   if(mode === "dark") return "#f5f5f5"
  //   return
  // })
  return (
    <Container className="tooltip">
      {/* Hover me! */}
      {label}
      <TooltipText className="tooltipText" color={color} mode={mode}>
        {children}
      </TooltipText>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 200px;
  height: 50px; */
  text-align: center;
  font: 800 30px 'sans-seridf';
`;
const TooltipText = styled.span`
  z-index: 1;
  position: absolute;
  visibility: hidden;
  bottom: 130%;
  left: 50%;
  /* width: 200px; */
  padding: 5px 10px;
  margin-left: -60px;
  background-color: ${(props) => {
    if (props.mode === 'bright') return '#666';
    if (props.mode === 'dark') return '#f5f5f5';
  }};
  font: 500 15px 'sans-serif';
  color: ${(props) => {
    if (props.mode === 'bright') return '#f5f5f5';
    if (props.mode === 'dark') return '#333';
  }};
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
    border: ${(props) => {
      if (props.mode === 'bright') return '5px solid #666';
      if (props.mode === 'dark') return '5px solid #f5f5f5';
    }};
    border-color: ${(props) => {
      if (props.mode === 'bright')
        return '#666 transparent transparent transparent';
      if (props.mode === 'dark')
        return '#f5f5f5 transparent transparent transparent';
    }};
  }
`;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  mode: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
