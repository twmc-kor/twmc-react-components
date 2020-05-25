import React, { useState, useReducer } from 'react';
import {CheckBox} from '../components';
import styled from 'styled-components';

export default function CheckBoxBoard() {

    // const [checking, setChecking] = useState({
    //     checkItem : [
    //         {id: 1, value: ItemA, checked: ischecked},
    //         {id: 2, value: ItemB, checked: ischecked},
    //         {id: 3, value: ItemC, checked: ischecked},
    //     ]
    // })

    const [checked, setChecked] = useState(false);
    function handleChange (e) {
        // e.preventdefault();
        setChecked(e.target.checked);
    }

    const initialState = {
        clickA: false,
        clickB: false,
        clickC: false,
        all: false
    }

    const reducer = (state, action) => ({...state, ...action})
    const [state, setState] = useReducer(reducer, initialState);

    const clearFilter = () => setState(initialState);

    return(
        <Content>
            <P>Check-Box</P>
            <div>
                <Button onClick={() => clearFilter()}>RESET</Button>
                <input 
                type="checkbox" />
                <span style={{marginLeft:10}}>check/uncheck all</span>
            </div>
            <br />
            <label>        
                <CheckBox 
                checked={state.clickA}
                isClicked={v => setState({clickA : v})}
                onChange={handleChange} />
                <span style={{marginLeft:10,fontSize:25}}>
                    Item A is  {state.clickA ? "checked" : "unchecked"}
                </span>
            </label>
            <label>
                <CheckBox 
                checked={state.clickB}
                isChanged={v => setState({clickB : v})}
                onChange={handleChange} />
                <span style={{marginLeft:10,fontSize:25}}>
                Item B is  {state.clickB ? "checked" : "unchecked"}
                </span>
            </label>
            <label>
                <CheckBox 
                checked={state.clickC}
                isClickC={v => setState({clickC : v})}
                onChange={handleChange} />
                <span style={{marginLeft:10,fontSize:25}}>
                Item C is  {state.clickC ? "checked" : "unchecked"}
                </span>
            </label>
        </Content>
    );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.div`
  width: 260px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
  cursor: default;
`;

const Button = styled.button`
    outline: none;
    background-color: #fdcb6e;
`;