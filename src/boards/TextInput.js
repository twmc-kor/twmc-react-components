import React, {useState, useEffect} from 'react';
import TextInput from '../components/TextInput';
import styled from 'styled-components';

const Show = () => <Img src={require('../assets/show.png')} alt="show" />;

const Hide = () => <Img src={require('../assets/hide.png')} alt="hide" />;

function TextInputBoard() {
  const [state, setState] = useState({
    text: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (e) => {
    setState({...state, [prop]: e.target.value});
  };

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
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
        <H1> Variant Styled</H1>
        <Content>
          <Label variant="standard">Your ID:</Label>
          <TextInput
            type="text"
            size="big"
            variant="standard"
            value={state.text}
            onChange={handleChange('text')}
          />
          <TextInput
            type="text"
            size="big"
            variant="filled"
            value={state.text}
            onChange={handleChange('text')}
          />
          <Label variant="filled">Your ID:</Label>
          <TextInput
            type="text"
            size="big"
            variant="outlined"
            value={state.text}
            onChange={handleChange('text')}
          />
          <Label variant="outlined">Your ID:</Label>
        </Content>
        <Content>
          <Label variant="standard">Your PASSWORD:</Label>
          <TextInput
            variant="standard"
            size="big"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
          />
          <Button
            variant="standard"
            size="big"
            onClick={handleClickShowPassword}>
            {state.showPassword ? <Show /> : <Hide />}
          </Button>
          <TextInput
            variant="filled"
            size="big"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
          />
          <Button variant="filled" onClick={handleClickShowPassword}>
            {state.showPassword ? <Show /> : <Hide />}
          </Button>
          <Label variant="filled">Your PASSWORD:</Label>
          <TextInput
            size="big"
            variant="outlined"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
          />
          <Button variant="outlined" onClick={handleClickShowPassword}>
            {state.showPassword ? <Show /> : <Hide />}
          </Button>
          <Label variant="outlined">Your PASSWORD:</Label>
        </Content>
      </form>
    </Container>
  );
}

export default TextInputBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  position: absolute;
  left: ${({variant}) => {
    if (variant === 'standard') return '25%';
    if (variant === 'filled') return '58%';
    if (variant === 'outlined') return '91%';
  }};
  width: 40px;
  height: 40px;
  background-color: transparent;

  border: 0;
  border-radius: 50%;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(138, 123, 123, 0.2);
  }
`;

const Img = styled.img`
  display: flex;
  margin: auto;
  width: 25px;
  height: 25px;
`;

const Label = styled.label`
  position: absolute;
  top: ${({variant}) => {
    if (variant === 'standard') return '10%';
    if (variant === 'filled') return '20%';
    if (variant === 'outlined') return '6%';
  }};
  left: ${({variant}) => {
    if (variant === 'standard') return '2%';
    if (variant === 'filled') return '36%';
    if (variant === 'outlined') return '71%';
  }};
  background-color: ${({variant}) => {
    if (variant === 'outlined') return '#fff';
  }};
  font-size: ${({variant}) => {
    if (variant === 'standard') return '15px';
    if (variant === 'filled') return '8px';
  }};
  font-weight: ${({variant}) => {
    if (variant === 'standard') return '400';
    if (variant === 'filled') return '600';
  }};
  color: ${({variant}) => {
    if (variant === 'standard') return '15px';
    if (variant === 'filled') return '#fff';
  }};
  cursor: text;
`;
