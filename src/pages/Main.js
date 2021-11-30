import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Profile from '../containers/Profile';
import GitInfo from '../containers/GitInfo';
import Footer from '../components/Footer';
import overview from '../assets/overview.PNG';
import pack from '../assets/package.PNG';
import project from '../assets/project.PNG';
import repo from '../assets/repo.PNG';
import {BiBookBookmark} from 'react-icons/bi';

function Main() {
    return (
        <MainWrapper>
            <Header />
            <Wrapper style={{'borderBottom': '1px solid #D8DEE4'}}>
                <MenuWrapper>
                    <Menu style={{'width':'70vw'}}>
                        <Menu style={{'width':'20vw'}} />
                        <Menu style={{'width':'50vw', 'justifyContent':'space-between'}}>
                            <Menu>
                                <Button style={{'fontWeight':'600', 'color':'black', 'borderBottom':'2px solid #FD8C73'}}><Icon src={overview}/>Overview</Button>
                                <Button><Icon src={repo}/>Repositories<RepoNum>14</RepoNum></Button>
                                <Button><Icon src={project}/>Projects</Button>
                                <Button><Icon src={pack}/>Packages</Button>
                            </Menu>
                            <Link to = "/create-repo" style={{'textDecorationLine':'none'}}>
                                <CreateBtn><BiBookBookmark style={{'marginRight':'0.5rem'}}/>New</CreateBtn>
                            </Link>
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
            <Wrapper>
                <Foot>
                    <Footer />
                </Foot>
            </Wrapper>
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
gap: 1vw;
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
cursor: pointer;
`

const CreateBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 2.2rem;
font-size: 0.9rem;
color: white;
outline: none;
background: #2DA44E;
border: 1px #2C974B solid; border-radius: 0.5rem;
box-sizing: inherit;
padding: 0 0.8rem;
margin-bottom: 0.2rem;
cursor: pointer;
&:hover{
background: #2C974B;
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
display: flex;
width: 70vw;
margin-top: 1rem;
border-top: 1px solid #D8DEE4;
`

export default Main;