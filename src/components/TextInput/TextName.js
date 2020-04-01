import React from 'react';
import styled from 'styled-components';

function TextName () {
  return(
    <Container>
    <form action="">
      <MainContent>
      <InputName
        type="text"
        id="name"
        required 
      />
      <Label for="name">
        Your name
      </Label>
      </MainContent>
    </form>
    </Container>
  ); 
}

export default TextName;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;


const MainContent = styled.div`
  position: relative;
  width: 250px;
  height: 44px;
  line-height: 44px;
  margin-top: 22px;
}
`;

const Label =styled.label`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 23px;
  color: #95afc0;
  transition: 0.3s all;
  cursor: text;
`;

const InputName = styled.input`
display: flex;
justify-content: center;
width: 120%;
margin: auto;
border: 0;
outline: 0;
padding: 0.5rem 0;
font-size: 30px;
border-bottom: 2px solid #95afc0;
box-shadow: none;
color: #111;
&:invalid {
  outline: 10;
}
&:focus,
&:valid {
  border-color: #686de0;
}
&:focus~label,
&:valid~label {
  font-size: 14px;
  top: -30px;
  color: #686de0;
}
`;