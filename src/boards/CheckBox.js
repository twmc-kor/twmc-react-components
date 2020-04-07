import React, { Component } from 'react';
import {CheckBox} from '../components';
import styled from 'styled-components';

class CheckBoxBoard extends Component {
    state ={
        checked: false
    }


    handleChange = (e) => {
        this.setState({
            checked: e.target.checked
        });
    }
    render() {
        
        return(
            <Content>
                <label>
                    <P>CheckBox-Basic</P>
                    <CheckBox 
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        color="salmon" />
                </label>
            </Content>
        );
    }
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


export default CheckBoxBoard;