import React from 'react';
import styled from 'styled-components';
import './style.css';

export default function Tooltip() {
  // const {
  //   placement,
  //   children,
  // }
  return (
    <Container>
      <div className="tooltip">
        Hover me!
        <span className="tooltipText">Here is a Tooltip</span>
      </div>
      {/* <TooltipText placement={placement}>{children}</TooltipText> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 20px;
`;
