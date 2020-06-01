import React, {useState, useEffect} from 'react';
import InputTest from '../components/InputTest';
import styled from 'styled-components';

const Show = () => (
  <img src={require('../assets/show.png')} alt="show" style={{width: '25px'}} />
);

const Hide = () => (
  <img src={require('../assets/hide.png')} alt="hide" style={{width: '25px'}} />
);

function TestBoard() {
  const [state, setState] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (e) => {
    setState({...state, [prop]: e.target.value});
  };

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setState({...state, showPassword: !state.showPassword});
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <Container>
      <form autoComplete="off">
        <Content>
          <InputTest type="text" size="big" variant="standard" />
          <InputTest type="text" size="big" variant="filled" />
          <InputTest type="text" size="big" variant="outlined" />
        </Content>
        <Content>
          <InputTest
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            variant="standard"
          />
          <Button
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}>
            {state.showPassword ? <Hide /> : <Show />}
          </Button>
          <InputTest
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            variant="filled"
          />
          <Button
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}>
            {state.showPassword ? <Hide /> : <Show />}
          </Button>
          <InputTest
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            variant="outlined"
          />
          <Button
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}>
            {state.showPassword ? <Hide /> : <Show />}
          </Button>
        </Content>
      </form>
    </Container>
  );
}

export default TestBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  position: absolute;
  left: 50%;
  border: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
