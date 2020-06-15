import React from 'react';
import styled from 'styled-components';

export default function Select(props) {
  const [value, name, onChange, children] = props;
  return (
    <Container value={value} name={name} onChange={onChange}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;
`;
