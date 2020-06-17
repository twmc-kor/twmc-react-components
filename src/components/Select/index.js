import React from 'react';
import styled from 'styled-components';

export default function Select(props) {
  const [label, value, name, onChange, multiple, children] = props;
  return (
    <Container
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      multiple={multiple}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;
`;
