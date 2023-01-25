import { NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
font-size: 32px;
margin-top: 5px;
`; 

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid rgb(169, 153, 153);
  border-radius: 10px;
  background-color:brown;
 
`; 

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding:  0 40px 0 20px;
`; 

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding: 0;
`; 


export const Value = styled.span`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
  font-weight: 500;
  margin-left: 10px;
`; 
export const Genres = styled.p`
  font-size: medium;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 500;
  margin: 0;
  text-indent: 3ch;
  margin-left:0;
  margin-top: 10px;
  
`;
export const Overview = styled.p`
  font-size: medium;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 500;
  margin: 0;
  text-indent: 3ch;
  margin-top: 10px;
  
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
`; 
export const InfoTitle = styled.p`
    font-weight: 700;
    margin-left:20px;
`; 
export const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: larger;
    padding: 12px;
    background-color: yellow;
    border-radius: 5px;


&:hover {
    scale: 1.05;
    background-color: red;
}`; 



