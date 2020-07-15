import React, {useState} from 'react';
import {CheckBox} from '../components';
import styled from 'styled-components';
// import Button from '../components/Button';

export default function CheckBoxBoard() {
  const initialState = {
    a: false,
    b: false,
    c: false,
  };
  const checkAllState = {
    a: true,
    b: true,
    c: true,
  };
  const [check, setCheck] = useState(initialState);
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => setCheck(initialState)}>RESET</Button>
        <Button onClick={() => setCheck(checkAllState)}>CHECK ALL</Button>
      </ButtonContainer>
      <CheckboxContainer>
        <CheckBox
          value={check.a}
          onClick={(value) =>
            setCheck({
              ...check,
              a: value,
            })
          }
          label={
            <CheckStatus isChecked={check.a}>Basic style checkbox</CheckStatus>
          }
        />
        <CheckBox
          value={check.b}
          onClick={(value) =>
            setCheck({
              ...check,
              b: value,
            })
          }
          asset={
            <svg
              style={{
                fill: 'none',
                stroke: 'blue',
                strokeWidth: '5px',
                width: '100%',
                height: '100%',
              }}
              viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          }
          activeBackgroundColor="lightblue"
          inActiveBackgroundColor="#89e297"
          activeBorderColor="yellow"
          inActiveBorderColor="#e65c5c"
          label={
            <CheckStatus isChecked={check.b}>Custom style checkbox</CheckStatus>
          }
        />
        <CheckBox
          value={check.c}
          onClick={(value) =>
            setCheck({
              ...check,
              c: value,
            })
          }
          asset={
            <StyledImage alt="custom_checkbox_image" src="/img/react.png" />
          }
          label={
            <CheckStatus isChecked={check.c}>Custom image checkbox</CheckStatus>
          }
        />
      </CheckboxContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  font: 500 15px 'Helvetica Neue';
  color: #fff;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  background-color: #f59f00;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckStatus = styled.div`
  padding-left: 5px;
  font: 'Helvetica Neue';
  text-decoration: ${({isChecked}) => (isChecked ? 'line-through' : 'none')};
`;

const StyledImage = styled.img`
  width: 18px;
  height: 18px;
`;
