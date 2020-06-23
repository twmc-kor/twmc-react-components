import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100px;
  height: 40px;
  font-size: 15px;
  text-align-last: center;
  border: 0;
  border-bottom: 1px solid #131313;
  background-color: transparent;
  margin: 10px;
`;

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

export default function Select(props) {
  const {label, value, option, map, onChange} = props;

  return (
    <Container>
      <form>
        <StyledSelect
          label={label}
          value={value}
          option={option}
          map={map}
          onChange={onChange}>
            {firstList}
          </StyledSelect>
          <StyledSelect
          label={label}
          value={value}
          option={option}
          map={map}
          onChange={onChange}>
            {secondList}
          </StyledSelect>
          <StyledSelect
          label={label}
          value={value}
          option={option}
          map={map}
          onChange={onChange}>
            {thirdList}
          </StyledSelect>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;
`;
