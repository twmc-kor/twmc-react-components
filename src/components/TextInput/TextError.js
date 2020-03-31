import React from 'react';
import styled from 'styled-components';

function TextError () {
  return(
    <Container>
    <form action="">
      <MainContent>
      <InputName
        type="text"
        id="Error"
        placeholder="Try Again :("
        disabled
        required 
      />
      <Label for="Error">
        Error
      </Label>
      </MainContent>
    </form>
    </Container>
  ); 
}

export default TextError;

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
display: inline-block;
margin: 0;
transform: translate(-40%, -120%);
background: #fff;
color: #c23616;
`;

const InputName = styled.input`
display: flex;
width: 120%;
border: 1.25px solid #c23616;
border-radius: 6px;
outline: 0;
padding: 20px 0 8px 10px;
font-size: 25px;
::placeholder {
    color: #353b48;
    display: flex;
    text-align: center;
    font-weight: 300;
  }
`;
