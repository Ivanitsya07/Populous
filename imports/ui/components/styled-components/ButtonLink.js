import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  /* Adapt the colours based on primary prop */
  display: inline-block;
  width: ${props => (props.width ? `calc(${props.width} - 6px)` : 'unset')};
  font-size: ${props => props.size || '1em'};
  background: ${props => (props.primary ? props.theme.colors.primary : '#fff')};
  color: ${props => (props.primary ? '#fff' : props.theme.colors.primary)};
  cursor: pointer;
  padding: ${props => (props.width ? '0.65em 0.8em' : '0.65em 1.2em')};
  margin: 2px 3px 0;
  border: ${props =>
    props.primary
      ? '1px solid transparent'
      : `1px solid ${props.theme.colors.primary}`};
  border-radius: 0px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
  letter-spacing: 1px;
  line-height: inherit;
  // Pseudo selectors work as well
  &:hover {
    background: ${props =>
      props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    color: #fff;
    text-decoration: none;
  }
`;

export default ButtonLink;
