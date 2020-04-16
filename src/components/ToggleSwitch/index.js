import React from 'react';
import styled from 'styled-components';

export default function ToggleSwitch(props) {
  const {id, name, onChange, checked, children} = props;
  return (
    <Container id={id} name={name} checked={checked} onChange={onChange}>
      {children}
    </Container>
  );
}

const Container = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    background: ${(props) => {
      if (props.id === 'normal_1') return '#5352ed';
      if (props.id === 'normal_2') return '#ED4C67';
      if (props.id === 'normal_3') return '#fbc531';
      if (props.id === 'slim_1') return 'rgba(72, 52, 212, 0.6)';
      if (props.id === 'slim_2') return 'rgba(237, 76, 103, 0.6)';
      if (props.id === 'slim_3') return 'rgba(251, 197, 49, 0.6)';
    }};
  }
  &:checked + label:after {
    left: ${(props) => {
      if (
        props.id === 'normal_1' ||
        props.id === 'normal_2' ||
        props.id === 'normal_3'
      )
        return 'calc(100% - 3px)';

      if (
        props.id === 'slim_1' ||
        props.id === 'slim_2' ||
        props.id === 'slim_3'
      )
        return 'calc(100% - 0px)';
    }};
    transform: translateX(-100%);
    background-color: ${(props) => {
      if (props.id === 'slim_1') return '#5352ed';
      if (props.id === 'slim_2') return '#ED4C67';
      if (props.id === 'slim_3') return '#fbc531';
    }};
  }
`;
