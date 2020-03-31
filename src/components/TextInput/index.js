import React from 'react';
import TextName from './TextName';
import TextStandard from './TextStandard';
import styled from 'styled-components';


class Div extends React.Component {
  render() {
    const { color, children } = this.props;
    return(
      <DivField color={color}>
        {children}
      </DivField>
    );
  }
}



function TextInput () {
  return(
    <Container>
      <Title>Input Text(1)</Title>
     <Div>
        <TextStandard />
     </Div>
     <Title>Input Text(2)</Title>
     <Div>
      <TextName />
     </Div>
     <Title>Input Text(3)</Title>
     <Div>
       3
     </Div>
    </Container>
  ); 
}

export default TextInput ;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DivField = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #2d3436;
  border-radius: 7px;
  width: 93%;
  height: 20%;
  margin: auto;
  margin: 40px 20px;
  background-color: white;
`;

const Title =styled.h4`
  display: flex;
  justify-content: center;
  margin: auto;
  margin: 10px;
`;