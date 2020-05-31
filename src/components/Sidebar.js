import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 30%;
  background-color: #3f72af;
`;
const SidebarName = styled.div`
  margin: 25px;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  color: #112d4e;
`;
const RouteButton = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 5px;
  text-decoration: none;
  color: #dbe2ef;
  font-size: 22px;
  font-weight: 500;
  &.active {
    color: #ff9a00;
    font-family: 'Roboto', sans-serif;
  }
`;
const TwmcLink = styled.a`
  position: absolute;
  top: 490px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
  color: #ff6464;
  &:hover {
    color: #fa4659;
  }
`;

function Sidebar() {
  return (
    <Container color="#ddd">
      <SidebarName>Component list</SidebarName>
      <RouteButton exact to="/"><img src="/img/twmc_logo.png" alt="twmc logo" style={{width:25, height:25, marginRight:5}}/>TodayWeMakeCode</RouteButton>
      <RouteButton to="/button">Button</RouteButton>
      <RouteButton to="/text-input">TextInput</RouteButton>
      <RouteButton to="/check-box">CheckBox</RouteButton>
      <RouteButton to="/toggle-switch">ToggleSwitch</RouteButton>
      <TwmcLink href="https://github.com/twmc-kor/twmc-react-components"><img src="/img/twmc_logo.png" alt="twmc logo" style={{width:25, height:25, marginRight:5}}/>TWMC GITHUB</TwmcLink>
    </Container>
  );
}

export default Sidebar;
