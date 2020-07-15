import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 130px;
  height: 50px;
  font-size: 30px;
  text-align-last: center;
  border: 0;
  border-bottom: 1.5px solid #131313;
  background-color: transparent;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export default function Select(props) {
  const {name, value, onClick, onChange, children} = props;

  return (
    <Container>
      <form>
        <StyledSelect
          name={name}
          value={value}
          onClick={onClick}
          onChange={onChange}>
            {children}
          </StyledSelect>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 5px;
`;
