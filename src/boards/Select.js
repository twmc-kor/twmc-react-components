import React from 'react';
import styled from 'styled-components';
import Select from '../components/Select';

const firstOption = ['AM', 'PM'];
const firstList = firstOption.map((fitstOption) => (
  <option>{fitstOption}</option>
));

function SelectBoard() {
  return (
    <Container>
      <Select>
      </Select>
    </Container>
  );
}

export default SelectBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
