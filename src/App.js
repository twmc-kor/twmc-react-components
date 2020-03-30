import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RootRouter from './routes';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ContentContainer = styled(Container)`
  flex-direction: row;
  min-width: 1000px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5px;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <ContentContainer>
          <Sidebar />
          <RootRouter />
        </ContentContainer>
      </BrowserRouter>
    </Container>
  );
}

export default App;