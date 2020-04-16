import React, {useState, useEffect} from 'react';
import {ToggleSwitch} from '../components';
import styled from 'styled-components';

function SwitchBoard() {
  const [state, setState] = useState({
    normal_1: false,
    normal_2: false,
    normal_3: false,
    slim_1: false,
    slim_2: false,
    slim_3: false,
  });

  useEffect(() => {
    console.log(state);
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.checked,
    });
  };
  return (
    <Content>
      <h1>The Switch is {state.normal_1 ? 'ON' : 'OFF'}</h1>
      <P>Switch - Normal</P>
      <Div>
        <ToggleSwitch
          type="checkbox"
          id="normal_1"
          checked={state.normal_1}
          onChange={handleChange}
        />
        <Label for="normal_1" name="normal_1" />

        <ToggleSwitch
          type="checkbox"
          id="normal_2"
          checked={state.normal_2}
          onChange={handleChange}
        />
        <Label for="normal_2" name="normal_2" />
        <ToggleSwitch
          type="checkbox"
          id="normal_3"
          checked={state.normal_3}
          onChange={handleChange}
        />
        <Label for="normal_3" name="normal_3" />
      </Div>
      <P>Switch - Slim</P>
      <Div>
        <ToggleSwitch
          type="checkbox"
          id="slim_1"
          checked={state.slim_1}
          onChange={handleChange}
        />
        <Label for="slim_1" name="slim_1" />
        <ToggleSwitch
          type="checkbox"
          id="slim_2"
          checked={state.slim_2}
          onChange={handleChange}
        />
        <Label for="slim_2" name="slim_2" />
        <ToggleSwitch
          type="checkbox"
          id="slim_3"
          checked={state.slim_3}
          onChange={handleChange}
        />
        <Label for="slim_3" name="slim_3" />
      </Div>
    </Content>
  );
}

export default SwitchBoard;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
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

const Label = styled.label`
  cursor: pointer;
  width: 100px;
  height: ${(props) => {
    if (
      props.name === 'normal_1' ||
      props.name === 'normal_2' ||
      props.name === 'normal_3'
    )
      return '50px';

    if (
      props.name === 'slim_1' ||
      props.name === 'slim_2' ||
      props.name === 'slim_3'
    )
      return '25px';
  }};
  background: ${(props) => {
    if (
      props.name === 'normal_1' ||
      props.name === 'normal_2' ||
      props.name === 'normal_3'
    )
      return '#dcdde1';

    if (
      props.name === 'slim_1' ||
      props.name === 'slim_2' ||
      props.name === 'slim_3'
    )
      return '#a4b0be';
  }};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: ${(props) => {
      if (
        props.name === 'normal_1' ||
        props.name === 'normal_2' ||
        props.name === 'normal_3'
      )
        return '1.8px';

      if (
        props.name === 'slim_1' ||
        props.name === 'slim_2' ||
        props.name === 'slim_3'
      )
        return '-10px';
    }};
    left: ${(props) => {
      if (
        props.name === 'normal_1' ||
        props.name === 'normal_2' ||
        props.name === 'normal_3'
      )
        return '3px';
      if (
        props.name === 'slim_1' ||
        props.name === 'slim_2' ||
        props.name === 'slim_3'
      )
        return '0px';
    }};
    width: 45px;
    height: 45px;
    background: ${(props) => {
      if (
        props.name === 'normal_1' ||
        props.name === 'normal_2' ||
        props.name === 'normal_3'
      )
        return '#fff';

      if (
        props.name === 'slim_1' ||
        props.name === 'slim_2' ||
        props.name === 'slim_3'
      )
        return '#dcdde1';
    }};
    border-radius: 45px;
    transition: 0.3s;
  }
  &:active:after {
    width: 55px;
  }
  &:hover {
    background-color: ${(props) => {
      if (
        props.name === 'normal_1' ||
        props.name === 'normal_2' ||
        props.name === 'normal_3'
      )
        return '#95a5a6';
    }};
  }

  &:hover:after {
    color: red;
  }
`;
