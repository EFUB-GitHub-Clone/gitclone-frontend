import React from "react";
import styled, {css} from "styled-components";
import img from '../assets/github-mark.PNG';
import alarmImg from '../assets/alarm.PNG';
import menu from '../assets/menu.PNG';
import user from '../assets/user.PNG';

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
            <Menu style={{'gap':'3px'}}>
                <Icon src={alarmImg}/>
                <Icon src={menu}/>
                <Icon src={user}/>
            </Menu>
        </Head>
    );
};

const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width: 100%; height: 8vh;
background: #24292F;
color: white;
@media (max-width: 768px) {
  height: 6vh;
  justify-content: space-around
}
`;

const Logo = styled.img`
padding: 0.5rem;
&:hover {
  cursor: pointer;
}
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
&:hover {
  color: #C8C9CB;
  cursor: pointer;
}
@media (max-width: 768px) {
  display: none;
}
`;

const Icon = styled.img`
justify-content: center;
display: block;
&:hover {
  cursor: pointer;
}
@media (max-width: 768px) {
  display: none;
}
`;


export default Header;