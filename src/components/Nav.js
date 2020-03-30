import React from 'react';
import styled from 'styled-components';


const NavBar = styled.nav`
width: 100%;
heigth: 80px;
display: flex;
justify-content: space-between;
align-items: center;
padding 5px 20px;
box-shadow: 0px 3px 10px 1px rgba(186,186,186,1);
div {
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 20px
}
.nav-icons {
    margin-right: 10px;
 } 
`
const Nav = () => {
    return (
        <NavBar>
            <h1>Stylagram</h1>
            <input type='text' placeholder="Search"></input>
        
        </NavBar>
    )
}
export default Nav;