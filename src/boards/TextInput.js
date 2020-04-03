import React from 'react';
import { TextInput } from '../components';
import styled from 'styled-components';

function TextInputBoard() {
  return (
  <Content>
        <P>TextField - Standard</P>
        <Div>
        <TextInput mode='standard'
                  type='text'
                  id="1"
        />
        <Label for="1">
          Your Name:
        </Label>
        </Div>
      <P>TextField - Filled</P>
      <TextInput mode='filled'
                type='text'
      />

      <P>TextField - Disabled</P>
      <TextInput mode='disabled'
                type='text'
                disabled // 왜 안될ㄲㅏ요..
      />
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
margin-bottom: 15px;
padding: 10px;
border-bottom: 2px solid #dee2e6;
font-size: 30px;
color: #495057;
cursor: default;
`;

const Div =styled.div`
position: relative;
`;

const Label =styled.label`
position: absolute;
top: 0;
left 0;
`;