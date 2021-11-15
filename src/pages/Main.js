import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Profile from '../components/Profile';
import GitInfo from '../components/GitInfo';
import Footer from '../components/Footer';
import overview from '../assets/overview.PNG';
import pack from '../assets/package.PNG';
import project from '../assets/project.PNG';
import repo from '../assets/repo.PNG';
import profileImage from '../assets/profileImg.jpg';

function Main() {
    return (
        <MainWrapper>
            <Header />
            <Wrapper style={{'border-bottom': '1px solid #D8DEE4'}}>
                <MenuWrapper>
                    <Menu style={{'width':'70vw'}}>
                        <Menu style={{'width':'20vw'}} />
                        <Menu style={{'width':'50vw'}}>
                            <Button style={{'fontWeight':'600', 'color':'black', 'borderBottom':'2px solid #FD8C73'}}><Icon src={overview}/>Overview</Button>
                            <Button><Icon src={repo}/>Repositories<RepoNum>14</RepoNum></Button>
                            <Button><Icon src={project}/>Projects</Button>
                            <Button><Icon src={pack}/>Packages</Button>
                        </Menu>
                    </Menu>
                </MenuWrapper>
            </Wrapper>
            <Wrapper>
                <div style={{'display':'flex','width':'70vw', 'gap':'1vw'}}>
                    <Profile />
                    <GitInfo />
                </div>
            </Wrapper>
            <Foot>
                <Footer/>
            </Foot>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
text-align: center;
`

const MenuWrapper = styled.div`
display: flex;
justify-content: center;
width: 75vw; height: 5rem;
gap: 1vw;
`

const Menu = styled.div`
display: flex;
align-items: flex-end;
gap: 1rem;
`

const Icon = styled.img`
padding: 0.2rem
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 2.5rem;
font-size: 0.9rem;
color: #24292F;
outline: none;
background: none;
border: none;
box-sizing: inherit;
&:hover {
  cursor: pointer;
}
`

const RepoNum = styled.div`
background: #EFF1F3;
padding: 0.3rem;
border-radius: 40%;
font-size: 0.75rem;
font-weight: 600;
margin-left: 0.3rem;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
`

const Foot = styled.div`
  width: 70vw;
  border-top: 1px solid #D8DEE4;
`

export default Main;