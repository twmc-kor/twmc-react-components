import React from 'react';
import styled from 'styled-components';

export default function CheckBox(props) {
    const {color, children} = props;
    return <Container color={color}>{children}</Container>
}

const Container = styled.input.attrs({type : 'checkbox'})`
    background-color: ${(props) => props.color};
`;