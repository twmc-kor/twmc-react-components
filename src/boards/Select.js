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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('First Option: ' + state.firstOption);
    alert('Second Option: ' + state.secondOption);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Section>
          <Select
            value={state.firstOption}
            onChange={handleChange}
            name="firstOption">
            <option value="" selected>
              First Option
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </Section>
        <Section>
          <Select
            value={state.secondOption}
            onChange={handleChange}
            name="secondOption">
            <option value="" selected>
              Second Option
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </Select>
        </Section>
        <Section>
          <Button type="submit" value="선택하기" />
        </Section>
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
background-color: transparent;
  width: 250px;
  height: 40px;
  margin: 5px;
  font-size: 17px;
  text-align-last: center;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Hr = styled.hr`
  width: 70vh;
`;

const Button = styled.input.attrs((props) => ({type: 'submit'}))`
  width: 250px;
  height: 40px;
  margin: 5px;
  font-size: 17px;
  &:hover {
    cursor: pointer;
  }
`;
