import React from 'react';
import styled from 'styled-components';

// styled.button is a function that returns a button, assigning it to Button creates a React
// component.
// We attach the
// https://www.styled-components.com/docs/basics#attaching-additional-props
const Button = styled.button.attrs({
  fontSize: props => props.size || '1em',
  type: props => `${props.type}` || 'button',
  disabled: props => !!props.disabled
})`
	/* Adapt the colours based on primary prop */
	font-size: ${props => props.size || '1em'};
	background: ${props => (props.primary ? props.theme.colors.primary : '#fff')};
	color: ${props => (props.primary ? '#fff' : props.theme.colors.primary)};
  cursor: pointer;
	padding: 0.66em 1.33em;
	border: ${props =>
    props.primary
      ? '1px solid transparent'
      : `1px solid ${props.theme.colors.primary}`};
	border-radius: 2px;
	text-transform: uppercase;
	font-family: 'PT Sans', sans-serif;
  letter-spacing: 1px;
  // Pseudo selectors work as well
  &:hover {
    background: ${props =>
      props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
	  color: #fff;
  }
  &:disabled {
    background: #77adf2;
    color: #fff;
    cursor: not-allowed;
  }
`;
export default Button;
