import React, { Component } from 'react';
import styled from 'styled-components';

// const ButtonColor = styled.button`
//   border-style: none;
// //   background-color: ${props => props.color}
// // `;

// class ButtonStyle extends React.Component {
//   render() {
//     const { color, children } = this.props;
//     return(
//       <ButtonColor color={color}>{children}</ButtonColor>
//     )
//   };
// }

const Button = () => {
  return (
    <button>Click</button>
    // <ButtonStyle color="#ffc078">Edit</ButtonStyle>
    // <ButtonStyle color="#ff8787">Delete</ButtonStyle>
    // <ButtonStyle color="#b197fc">Reset</ButtonStyle>
  );
}

export default Button;


