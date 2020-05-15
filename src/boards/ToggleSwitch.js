import React, {useState, useEffect} from 'react';
import {ToggleSwitch} from '../components';
import styled from 'styled-components';

const Good = () => (
  <img src={require('../assets/good.png')} alt="good" style={{width: '30px', marginRight: 10}} />
);
const Bad = () => (
  <img src={require('../assets/bad.png')} alt="bad" style={{width: '30px', marginRight: 10}} />
);

const colorBox = {
  toggleA: {head: '#fbc531', body: '#5352ed'},
  toggleB: {head: '#5352ed', body: '#ED4C67'},
  toggleC: {head: '#fff', body: '#fbc531'},
};

function SwitchBoard() {
  const [state, setState] = useState({
    toggleA: false,
    toggleB: false,
    toggleC: false,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <Container>
      <Content>
        {state.toggleA ? <Good /> : <Bad />}
        <ToggleSwitch
          color={colorBox.toggleA.body}
          headColor={colorBox.toggleA.head}
          name="toggleA"
          checked={state.toggleA}
          onChange={handleChange}
        />
      </Content>
      <Content>
        {state.toggleB ? <Good /> : <Bad />}
        <ToggleSwitch
          color={colorBox.toggleB.body}
          headColor={colorBox.toggleB.head}
          name="toggleB"
          checked={state.toggleB}
          onChange={handleChange}
        />
      </Content>
      <Content>
        {state.toggleC ? <Good /> : <Bad />}
        <ToggleSwitch
          name="toggleC"
          checked={state.toggleC}
          onChange={handleChange}
        />
      </Content>
    </Container>
  );
}

export default SwitchBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const P = styled.div`
  width: 300px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
  cursor: default;
`;
