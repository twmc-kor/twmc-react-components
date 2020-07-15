import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Overview from '../components/Overview';
import {
  ButtonBoard,
  TextInputBoard,
  CheckBoxBoard,
  ToggleSwitchBoard,
  ProfileImageBoard,
  TooltipBoard,
  SpinnerBoard,
  SelectBoard,
} from '../boards';
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
        <Route path="/toggle-switch" component={ToggleSwitchBoard} />
        <Route path="/profile-image" component={ProfileImageBoard} />
        <Route path="/tooltip" component={TooltipBoard} />
        <Route path="/spinner" component={SpinnerBoard} />
        <Route path="/select" component={SelectBoard} />
      </Switch>
    </Container>
  );
};

export default RootRouter;
