import React from 'react'
import styled from 'styled-components'

export const Block = styled.div`
  background: ${props => (props.invert ? props.theme.colors.secondary : 'white')};
  text-align: ${props => (props.center ? 'center' : 'none')};
  padding: 40px 30px 30px;
  margin-bottom: ${props => (props.headerForAnotherBlock ? 0 : '20px')};
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
`;

export const Card = styled.div`
  background: ${props => (props.invert ? props.theme.colors.secondary : 'white')};
  text-align: ${props => (props.align ? props.align : 'none')};
  padding: 30px 30px 20px;
  box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.05);
`;

export const PageHeader = styled.div`
  width: 100%;
  display: block;
  position: relative;
  background-color: ${props => (props.invert ? props.theme.colors.secondary : 'white')};
  background-image: ${props => (props.src ? 'url(' + props.src + ')' : 'unset')};
  background-repeat: no-repeat;
  background-position: ${props => (props.position ? props.position : 'top left')};
  text-align: ${props => (props.center ? 'center' : 'unset')};
  padding: 40px 30px 30px;
  margin-bottom: ${props => (props.headerForAnotherBlock ? 0 : '20px')};
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
  @media(max-width: 1199px) {
    background-size: 350px;
  }
  @media(max-width: 767px) {
    padding-top: 180px;
    background-position: 'top center';
    background-size: auto;
  }
`;

export const Footer = styled.footer`
  font-size: 14px;
  padding-top: 1rem ;
  padding-right: 1rem;
  padding-bottom: 0.01rem;
  background-color: ${props => props.theme.colors.darkGrey };
`;

export const Page = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.purple };
`;

export const Content = styled.div`
  min-height: calc(100vh - 112px);
`;

export const UnderLineDiv = styled.div`
    border-bottom: solid 2px #E1E5EB;
`;