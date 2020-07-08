import React from 'react';
import Tooltip from '../components/Tooltip';
import styled from 'styled-components';

export default function TooltipBoard() {
  return (
    <TooltipContainer>
      <TooltipMode>Bright Mode</TooltipMode>
      <BrightMode>
        <Tooltip label="This is bright mode.">Hover me!</Tooltip>
      </BrightMode>
      <TooltipMode style={{top: 290}}>Dark Mode</TooltipMode>
      <DarkMode>
        <Tooltip mode="dark" direction="bottom" label="This is dark mode.">
          Hover me again!
        </Tooltip>
      </DarkMode>
    </TooltipContainer>
  );
}

const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TooltipMode = styled.div`
  position: absolute;
  top: 50px;
  left: 30px;
  font: 600 30px 'Bangers', cursive;
  letter-spacing: 0.1em;
  color: #112d4e;
`;

const BrightMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 150px;
  margin: 50px 0 0;
  background-color: #fecb89;
`;
const DarkMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 150px;
  margin: 90px 0 0;
  color: #fff;
  background-color: #555;
`;
