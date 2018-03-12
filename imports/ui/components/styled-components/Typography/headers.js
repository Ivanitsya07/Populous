import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  text-transform: uppercase;
  letter-spacing: 1.1px;
  -webkit-font-smoothing: antialiased;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  @media(max-width: 767px) {
    font-size: 2rem;
  }
`;

export const H3 = styled.h3`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  letter-spacing: 1.1px;
  -webkit-font-smoothing: antialiased;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
`;

export const H5 = styled.h5`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  letter-spacing: 1.1px;
  -webkit-font-smoothing: antialiased;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
`;

export const P = styled.p`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  opacity: ${props => props.opacity};
  font-family: 'Helvetica', sans-serif;
  text-transform: ${props => (props.transform ? props.transform : 'initial')};
`;

export const Lead = styled.p`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  opacity: ${props => props.opacity};
  font-size: 1.2rem;
  font-family: 'Helvetica', sans-serif;
`;

export const Small = styled.p`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  opacity: ${props => props.opacity};
  font-size: 0.8rem;
  font-family: 'Helvetica', sans-serif;
  margin-bottom: 5px;
`;

export const Wrap = styled.p`
  color: ${props => (props.invert ? 'white' : props.theme.colors.black)};
  opacity: ${props => props.opacity};
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Helvetica', sans-serif;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
`;
