import styled from 'styled-components';

import {
    NavLink
}

from 'react-router-dom';

export const Box=styled.header` font-size: 32px;
text-transform: uppercase;
border-bottom: 2px solid black;
margin 20px;
`;

export const Nav=styled.header` display: flex;
justify-content: space-evenly;
font-size: 32px;
padding: 16px;
text-transform: uppercase;
`;

export const Link=styled(NavLink)` color: #000000;
border-radius: 5px;
padding: 6px 12px;
text-decoration: none;

&.active {
    background: yellow;
    border-radius: 5px;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: red;
}

`;