import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Overview from '../components/Overview';
import Board from '../components/Board';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70%;
`;

const RootRouter = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route
          path="/button"
          render={() => <Board component={<Button label="HI" />} />}
        />
        <Route
          path="/text-input"
          render={() => <Board component={<TextInput />} />}
        />
      </Switch>
    </Container>
  );
};

export default RootRouter;
