import React from "react";
import styled, {css} from "styled-components";
import img from '../assets/github-mark.PNG';

const Header = () => {
    return (
        <Head>
            <Menu>
                <Logo src={img}/>
                <Button>Why GitHub? </Button>
                <Button>Team </Button>
                <Button>Enterprise</Button>
                <Button>Explore</Button>
                <Button>Marketplace</Button>
                <Button>Pricing</Button>
            </Menu>
            <Menu style={{'gap':'10px'}}>
                <Search />
                <LoginButton>Sign in</LoginButton>
                <SignButton>Sign up</SignButton>
            </Menu>
        </Head>
    );
};

const Head = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100%; height: 8vh;
background: #24292F;
color: white;
gap: 10vw;
@media (max-width: 768px) {
  height: 6vh;
  justify-content: space-around
}
`;

const Logo = styled.img`
outline: none;
background: none;
border: none;
padding: 1rem;
font-weight: 600;
`;

const Menu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 5px;
`;

const Button = styled.button`
height: 3rem;
font-size: 1rem;
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

const Search = styled.input.attrs({
  type: 'text',
  placeholder: 'Search'
})`
width: 12vw;
border: #C8C9CB solid 1px;
border-radius: 6px;
background: transparent;
padding: 0.6rem 0.6rem;
@media (max-width: 768px) {
  display: none;
}
`

const LoginButton = styled.button`
height: 1.2rem;
font-size: 1rem;
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
`

const SignButton = styled.button`
height: 1.2rem;
font-size: 1rem;
justify-content: center;
padding: 0.5rem 0.5rem;
border: 1px solid white;
border-radius: 5px;
outline: none;
background: none;
display: block;
box-sizing: inherit;
color: white;
&:hover {
  color: #C8C9CB;
  cursor: pointer;
  border: 1px solid #C8C9CB;
  border-radius: 5px;
}
@media (max-width: 768px) {
  height: 0.8rem;
  font-size: 0.8rem;
}
`

export default Header;