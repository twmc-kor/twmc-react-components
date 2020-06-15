import React from 'react';
import styled from 'styled-components';

function SelectBoard() {
  const [state, setState] = React.useState({
    firstOption: '',
    secondOption: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  
  return (
    <Container>
        <p>First Option: {state.firstOption}</p>
        <p>Second Option: {state.secondOption}</p>
      <form>
        <Select
          value={state.firstOption}
          onChange={handleChange}
          name="firstOption">
          <option value="">First Option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <Select
          value={state.secondOption}
          onChange={handleChange}
          name="secondOption">
          <option value="">Second Option</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </Select>
      </form>
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

const Select = styled.select`
width: 200px;
height: 30px;
`;