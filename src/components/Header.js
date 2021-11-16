import React from "react";
import styled, {css} from "styled-components";
import img from '../assets/github-mark.PNG';
import plus from '../assets/plus.PNG';
import user from '../assets/user.PNG';
import {BiBell} from 'react-icons/bi';

const Header = () => {
    return (
        <Head>
            <Menu>
                <Logo src={img}/>
                <Search />
                <Button>Pull requests</Button>
                <Button>Issues</Button>
                <Button>Marketplace</Button>
                <Button>Explore</Button>
            </Menu>
            <Menu style={{'gap':'0.5vw'}}>
                <BiBell style={{'cursor':'pointer'}}/>
                <Icon src={plus}/>
                <Icon src={user}/>
            </Menu>
        </Head>
    );
};

const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%; height: 4rem;
background: #24292F;
color: white;
`;

const Logo = styled.img`
padding: 0.5rem;
cursor: pointer;
`;

const Search = styled.input.attrs({
    type: 'text',
    placeholder: 'Search or jump to...',
    onfocus: "this.placeholder=''",
    onblur: "this.placeholder='Search or jump to...'"
})`
width: 15vw;
border: #C8C9CB solid 1px;
border-radius: 6px;
outline: none;
background: none;
padding: 0.4rem 0.6rem;
transition: all 0.3s ease;
@media (max-width: 768px) {
  display: none;
}
&:focus {
  border: white solid 1px;
  background: white;
  width: 25vw;
}
`

const Menu = styled.div`
display: flex;
padding: 1.2rem;
flex-direction: row;
align-items: center;
gap: 5px;
`;

const Button = styled.button`
height: 3rem;
font-size: 0.9rem;
font-weight: 600;
justify-content: center;
padding: 0.5rem 0.5rem;
outline: none;
background: none;
border: none;
display: block;
box-sizing: inherit;
color: white;
cursor: pointer;
&:hover {
  color: #C8C9CB;
}
@media (max-width: 768px) {
  display: none;
}
`;

const Icon = styled.img`
justify-content: center;
display: block;
cursor: pointer;
@media (max-width: 768px) {
  display: none;
}
`;


export default Header;