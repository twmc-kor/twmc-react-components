import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 30%;
  background-color: #ddd;
`;
const RouteButton = styled(Link)`
    margin: 5px;
    text-decoration: none;
    color: #6F1E51;
    font-size: 20px;
    font-weight: 600;
`;

function Sidebar() {
  return (
    <Container color="#ddd">
      <h2>Component list</h2>
      <RouteButton to="/">Overview</RouteButton>
      <RouteButton to="/button">Button</RouteButton>
      <RouteButton to="/text-input">TextInput</RouteButton>
      <RouteButton to="/check-box">CheckBox</RouteButton>
    </Container>
  );
}

export default Sidebar;
