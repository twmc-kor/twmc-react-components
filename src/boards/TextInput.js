import React, {useState} from 'react';
import {TextInput} from '../components';
import styled from 'styled-components';

function TextInputBoard() {
  const [state, setState] = useState({
    userid_1: '',
    userid_2: '',
    userpwd_1: '',
    userpwd_2: '',
  });

  function handleChange(e) {
    const updatedState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(updatedState);
  }

  return (
    <Content>
      <P>Text-ID</P>
      <Form>
        <TextField>
          <TextInput
            type="text"
            value={state.userid_1}
            onChange={handleChange}
            id="userid_1"
            name="userid_1"
            required
          />
          <Label for="userid_1">Your ID:</Label>
        </TextField>
        <TextInput
          type="text"
          value={state.userid_2}
          onChange={handleChange}
          id="userid_2"
          name="userid_2"
          placeholder="Input Your ID"
          required
        />
      </Form>
      <P>Text-PassWord</P>
      <Form>
        <TextField>
          <TextInput
            type="password"
            value={state.userpwd_1}
            onChange={handleChange}
            id="userpwd_1"
            name="userpwd_1"
            required
          />
          <Label for="userpwd_1">Your PassWord:</Label>
        </TextField>
        <TextInput
          type="password"
          value={state.userpwd_2}
          onChange={handleChange}
          id="userpwd_2"
          name="userpwd_2"
          placeholder="Input Your PassWord"
          required
        />
      </Form>
    </Content>
  );
}

export default TextInputBoard;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.div`
  width: 300px;
  margin: 25px 0 25px 0;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
  cursor: default;
`;

const Form = styled.form`
  display: flex;
`;

const TextField = styled.div`
  position: relative;
  width: 200px;
  height: 44px;
  line-height: 50px;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #95afc0;
  cursor: text;
`;
