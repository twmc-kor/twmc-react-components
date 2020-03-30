import React from 'react';
import styled from 'styled-components';

function TextInput() {
  return(
    <div>
      <InputStyle
        placeholder="Input your Text"
      />
    </div>
  ); 
}

export default TextInput;

const InputStyle = styled.input`
font-size: 1.25rem;
outline: none;
border: none;
border-bottom: 1.75px solid #95afc0;
`;
