import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import overview from '../assets/overview.PNG';
import pack from '../assets/package.PNG';
import project from '../assets/project.PNG';
import repo from '../assets/repo.PNG';

function Main() {
    return (
        <MainWrapper>
            <Header />
            <Menu>
                <Button style={{'font-weight':'600', 'color':'black', 'border-bottom':'2px solid #FD8C73'}}><Icon src={overview}/>Overview</Button>
                <Button><Icon src={repo}/>Repositories<RepoNum>14</RepoNum></Button>
                <Button><Icon src={project}/>Projects</Button>
                <Button><Icon src={pack}/>Packages</Button>
            </Menu>
            <Wrapper>
                <Profile>

                </Profile>
                <GitInfo>

                </GitInfo>
            </Wrapper>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
text-align: center;
`

const Menu = styled.div`
display: flex;
align-items: flex-end;
width: 100%; height: 9rem;
border-bottom: 1px solid #D8DEE4;
justify-content: center;
gap: 1.5rem;
`

const Icon = styled.img`
padding: 0.2rem
`

const Button = styled.button`
display: flex;
font-size: 0.9rem;
height: 2.5rem;
align-items: center;
justify-content: center;
outline: none;
background: none;
border: none;
box-sizing: inherit;
color: #24292F;
&:hover {
  cursor: pointer;
}
`

const RepoNum = styled.div`
background: #EFF1F3;
padding: 0.5rem;
border-radius: 40%;
font-size: 0.8rem;
font-weight: 600;
margin-left: 0.3rem;
`

const Wrapper = styled.div`
width: 95%;
`

const Profile = styled.div`
width: 30%;
`

const GitInfo = styled.div`
width: 70%;
`





export default Main;