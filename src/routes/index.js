import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Overview from '../components/Overview';
import {ButtonBoard, TextInputBoard, CheckBoxBoard} from '../boards';
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
        <Route path="/button" component={ButtonBoard} />
        <Route path="/text-input" component={TextInputBoard} />
        <Route path="/check-box" component={CheckBoxBoard} />
      </Switch>
    </Container>
  );
};

export default RootRouter;
