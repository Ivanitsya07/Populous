import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const LinkedCard = styled(Card)`
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 8px 0 rgba(67,68,69,0.15);
    //	Pseudo selectors work as well
  &:hover {
    background: ${props =>
  props.primary ? '#1C7ECC' : props.theme.colors.primary};
	  color: ${props => (props.primary ?  'white' : '#fff' )};
	  box-shadow: none;
  }
`;
