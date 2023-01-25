import { NavLink} from 'react-router-dom';
import styled from 'styled-components';
export const NavBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px auto;
`;
export const SearchbarCss = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 64px; */
  padding: 0px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius:5px;
`;

/*
 * Стили компонента SearchForm
 */
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 400px;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  outline: none;
  border: 1px solid black;
  
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;


&:hover {
  opacity: 1;}
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding-left: 4px;
  padding-right: 4px;


&::placeholder {
  font: inherit;
  font-size: 18px;}
`; 


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