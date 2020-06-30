import React from 'react';
import styled from 'styled-components';
import Select from '../components/Select';

const firstOption = ['AM', 'PM'];
const firstList = firstOption.map((fitstOption) => (
  <option>{fitstOption}</option>
));

const secondOption = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
const secondList = secondOption.map((secondOption) => (
  <option>{secondOption}</option>
));

const thirdOption = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];
const thirdList = thirdOption.map((thirdOption) => (
  <option>{thirdOption}</option>
));

function SelectBoard() {
  const [state, setState] = React.useState({
    firstOption: 'AM',
    secondOption: '01',
    thirdOption: '00',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    alert(
      state.firstOption +
        state.secondOption +
        ':' +
        state.thirdOption +
        '알람이 설정되었습니다.',
    );
  };
  return (
    <Container>
      <Content>
        <Header>Settings Alram</Header>
        <AlramImg src={require('../assets/alram.png')} alt="alram" />
      </Content>
      <Content>
        <Select
          value={state.firstOption}
          onChange={handleChange}
          name="firstOption">
          {firstList}
        </Select>
        <Select
          value={state.secondOption}
          onChange={handleChange}
          name="secondOption">
          {secondList}
        </Select>
        <Select
          value={state.thirdOption}
          onChange={handleChange}
          name="thirdOption">
          {thirdList}
        </Select>
      </Content>
      <SetTimes>
        {state.firstOption} {state.secondOption}: {state.thirdOption}
      </SetTimes>
      <Button onClick={handleClick}>OK</Button>
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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const AlramImg = styled.img`
  width: 40px;
`;

const Button = styled.button`
  width: 100px;
  margin: 25px;
  padding: 5px;
  background-color: #ffa931;
  border: 0;
  border-radius: 4px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #fecb89;
  }
  font-size: 30px;
  &:focus {
    outline: none;
  }
`;

const SetTimes = styled.div`
  text-align: center;
  width: 250px;
  font-size: 35px;
  font-weight: 600;
  border: 0;
`;
