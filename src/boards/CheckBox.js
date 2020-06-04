import React, {useState} from 'react';
import {CheckBox} from '../components';
import styled from 'styled-components';

export default function CheckBoxBoard() {
  const initialStateA = {
    a: false,
    b: false,
    c: false,
  };
  const allCheckStateA = {
    a: true,
    b: true,
    c: true,
  };
  const initialStateB = {
    d: false,
    e: false,
    f: false,
  };
  const allCheckStateB = {
    d: true,
    e: true,
    f: true,
  };
  const [check, setCheck] = useState(initialStateA);
  const [img, setImg] = useState(initialStateB);

  return (
    <Container>
      <Section>Basic Style</Section>
      <ControlButton>
        <Button onClick={() => setCheck(initialStateA)}>RESET</Button>
        <Button onClick={() => setCheck(allCheckStateA)}>CHECK ALL</Button>
      </ControlButton>
      <CheckboxContainer>
        <CheckBox
          checked={check.a}
          onClick={(value) =>
            setCheck({
              ...check,
              a: value,
            })
          }
        />
        <CheckStatus>{check.a ? 'Hello' : 'GoodBye'}</CheckStatus>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckBox
          checked={check.b}
          onClick={(value) =>
            setCheck({
              ...check,
              b: value,
            })
          }
        />
        <CheckStatus>{check.b ? 'Check!' : 'UnCheck..'}</CheckStatus>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckBox
          checked={check.c}
          onClick={(value) =>
            setCheck({
              ...check,
              c: value,
            })
          }
        />
        <CheckStatus>{check.c ? 'checking!' : ''}</CheckStatus>
      </CheckboxContainer>
      <Section style={{top: 230}}>Custom Style</Section>
      <ControlButton style={{marginTop: 80}}>
        <Button onClick={() => setImg(initialStateB)}>RESET</Button>
        <Button onClick={() => setImg(allCheckStateB)}>CHECK ALL</Button>
      </ControlButton>
      <CheckboxContainer>
        <CheckBox
          checked={img.d}
          onClick={(value) =>
            setImg({
              ...img,
              d: value,
            })
          }
        />
        <CheckStatus>{img.d ? 'Hello' : 'GoodBye'}</CheckStatus>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckBox
          checked={img.e}
          onClick={(value) =>
            setImg({
              ...img,
              e: value,
            })
          }
        />
        <CheckStatus>{img.e ? 'Check!' : 'UnCheck..'}</CheckStatus>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckBox
          checked={img.f}
          onClick={(value) =>
            setImg({
              ...img,
              f: value,
            })
          }
          // type={<Icon />}
        />
        <CheckStatus>{img.f ? 'checking!' : ''}</CheckStatus>
      </CheckboxContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 610px;
  height: 450px;
`;

const Section = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  margin-bottom: 15px;
  font: 300 30px 'Bangers', cursive;
  letter-spacing: 0.1em;
  color: #112d4e;
  cursor: default;
`;
const ControlButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 50px 0 10px;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  font: 500 15px 'Helvetica Neue';
  color: #fff;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  background-color: #f59f00;
`;

const CheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  margin: 10px 0 0;
`;

const CheckStatus = styled.div`
  width: 100px;
  height: 30px;
  font: 500 22px 'Helvetica Neue';
`;
