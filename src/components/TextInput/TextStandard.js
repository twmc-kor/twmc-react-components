import React from 'react';
import styled from 'styled-components';

function TextStandard () {
  return(
    <Container>
    <form action="">
      <MainContent>
      <InputName
        type="text"
        id="standard"
        required 
      />
      <Label for="standard">
        Your name
      </Label>
      </MainContent>
    </form>
    </Container>
  ); 
}

export default TextStandard;

const Container = styled.div`
  display: flex;
`;


const MainContent = styled.div`
  position: relative;
  width: 250px;
  height: 50px;
  line-height: 44px;
  margin-top: 22px;
}
`;

const Label =styled.label`
position: absolute;
  top: 0;
  left: 10px;
  width: 100%;
  font-size: 23px;
  color: #fff;
  transition: 0.3s all;
  cursor: text;
`;

const InputName = styled.input`
width: 120%;
border: 0;
border-radius: 6px 6px 0 0;
background-color: #bdc3c7;
background-color: rgba(87, 96, 111, 0.4);
outline: 0;
padding: 20px 0 8px 10px;
font-size: 25px;
border-bottom: 2px solid #2f3542;

color: #111;
&:invalid {
  outline: 10;
}
&:focus,
&:valid {
  border-color: #c23616;
}
&:focus~label,
&:valid~label {
  font-size: 10px;
  top: -10px;
  color: #2f3640;
}
&:hover {
  background-color: #dcdde1;
}
`;
