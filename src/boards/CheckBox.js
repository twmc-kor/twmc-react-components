import React, { useState } from 'react';
import {CheckBox} from '../components';
import styled from 'styled-components';

export default function CheckBoxBoard() {

    const [checked, setChecked] = useState(false);
    function handleChange (e) {
        // e.preventdefault();
        setChecked(e.target.checked);
    }
    return(
        <Content>
            <label value="top">
                <P>CheckBox-Basic</P>
                <CheckBox 
                    checked={checked}
                    onChange={handleChange}
                    color="salmon" />
                <span style={{marginLeft:10}}>Check-box</span>
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