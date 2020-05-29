import React, { useState, useReducer } from 'react';
import {CheckBox} from '../components';
import styled from 'styled-components';

export default function CheckBoxBoard() {

    const [checked, setChecked] = useState({
        checked: false,
    });
    function handleChange (e) {
        // e.preventdefault();
        setChecked(e.target.checked);
    }

    const initialStateA = {
        clickA: false,
        clickB: false,
        clickC: false,
        all: false
    }
    const checkedStateA ={
        clickA: true,
        clickB: true,
        clickC: true,
        all: true
    }

    const initialStateB = {
        clickD: false,
        clickE: false,
        clickF: false,
        all: false
    }
    const checkedStateB ={
        clickD: true,
        clickE: true,
        clickF: true,
        all: true
    }

    const reducer = (state, action) => ({...state, ...action})
    const [state, setState] = useReducer(reducer, initialStateA);

    const clearFilterA = () => setState(initialStateA);
    const checkedFilterA = () => setState(checkedStateA);
    const clearFilterB = () => setState(initialStateB);
    const checkedFilterB = () => setState(checkedStateB);

    return(
        <Container>
            <Section>Basic Style</Section>
            <StyleContainer>
                <Controller>
                {/* button component에서 만든 button 넣기 - merge후 작업 */}
                    <ResetButton onClick={() => clearFilterA()}>RESET</ResetButton>
                    <ResetButton onClick={() => checkedFilterA()}>ALL CHECK</ResetButton>
                </Controller>
                <br />
                <CheckboxContainer>        
                    <CheckBox 
                        checked={state.clickA}
                        isClickA={v => setState({clickA : v})}
                        onChange={handleChange} />
                    <Status>
                        Item A is  {state.clickA ? "checked" : "unchecked"}
                    </Status>
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckBox 
                        checked={state.clickB}
                        isClickB={v => setState({clickB : v})}
                        onChange={handleChange} />
                    <Status>
                        Item B is  {state.clickB ? "checked" : "unchecked"}
                    </Status>
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckBox 
                        checked={state.clickC}
                        isClickC={v => setState({clickC : v})}
                        onChange={handleChange} />
                    <Status>
                        Item C is  {state.clickC ? "checked" : "unchecked"}
                    </Status>
                </CheckboxContainer> 
            </StyleContainer>
            <Section style={{marginTop:40}}>Custom Style</Section>
            <StyleContainer>
                <Controller>
                {/* button component에서 만든 button 넣기 - merge후 작업 */}
                    <ResetButton onClick={() => clearFilterB()}>RESET</ResetButton>
                    <ResetButton onClick={() => checkedFilterB()}>ALL CHECK</ResetButton>
                </Controller>
                <br />
                <CheckboxContainer>        
                    <CheckBox 
                        checked={state.clickD}
                        isClickD={v => setState({clickD : v})}
                        onChange={handleChange} />
                    <Status>
                        Item D is  {state.clickD ? "checked" : "unchecked"}
                    </Status>
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckBox 
                        checked={state.clickE}
                        isClickE={v => setState({clickE : v})}
                        onChange={handleChange} />
                    <Status>
                        Item E is  {state.clickE ? "checked" : "unchecked"}
                    </Status>
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckBox 
                        checked={state.clickF}
                        isClickF={v => setState({clickF : v})}
                        onChange={handleChange} />
                    <Status>
                        Item F is  {state.clickF ? "checked" : "unchecked"}
                    </Status>
                </CheckboxContainer> 
            </StyleContainer>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 610px;
  height: 450px;
`;
const StyleContainer = styled.div`
    /* display: flex; */
`;
const Section = styled.div`
  width: 260px;
  margin-bottom: 15px;
  font: 300 30px 'Bangers', cursive;
  letter-spacing: 0.1em;
  color: #112d4e;
  cursor: default;
`;
const Controller = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
`;
const ResetButton = styled.button`
    padding: 5px 10px;
    margin: 0 10px;
    font: 500 13px 'Helvetica Neue';
    color: #fff;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    background-color: #f59f00;
`;

const CheckboxContainer = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Status = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    font-size: 25px;
`;