import Button from './Button';

const GhostButton = Button.extend`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: none;
  font-weight: bold;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    background: transparent;
    border: none;
  }
`;

export default GhostButton;
