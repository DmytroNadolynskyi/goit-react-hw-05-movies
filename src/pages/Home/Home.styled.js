import { NavLink} from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 18px;
    color: black;
    padding: 5px;


&:hover {
    color: red;
    
   
}`; 
