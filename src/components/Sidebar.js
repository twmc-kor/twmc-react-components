import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 30%;
  background-color: #3f72af;
`;
const P = styled.div`
  margin: 25px;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  color: #112d4e;
`;
const RouteButton = styled(NavLink)`
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

function Sidebar() {
  return (
    <Container color="#ddd">
      <P>Component list</P>
      <RouteButton exact to="/">Overview</RouteButton>
      <RouteButton to="/button">Button</RouteButton>
      <RouteButton to="/text-input">TextInput</RouteButton>
      <RouteButton to="/check-box">CheckBox</RouteButton>
      <RouteButton to="/toggle-switch">ToggleSwitch</RouteButton>
    </Container>
  );
}

export default Sidebar;
