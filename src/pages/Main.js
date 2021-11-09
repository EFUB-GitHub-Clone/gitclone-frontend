import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import GitInfo from '../components/GitInfo';
import overview from '../assets/overview.PNG';
import pack from '../assets/package.PNG';
import project from '../assets/project.PNG';
import repo from '../assets/repo.PNG';
import profileImage from '../assets/profileImg.jpg';
import pencil from '../assets/pencil.PNG';

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
                <div style={{'display':'flex','width':'75%'}}>
                    <Profile>
                        <ProfileImg src={profileImage} />
                        <p>Su a Kim</p>
                        <p>sua-kim</p>
                    </Profile>
                    <GitInfo />
                </div>
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
position: relative;
width: 100%; height: 9rem;
border-bottom: 1px solid #D8DEE4;
justify-content: center;
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

const Profile = styled.div`
width: 30%;
text-align: left;
`

const ProfileImg = styled.img`
text-align: center;
width: 320px; height: 320px;
border-radius: 50%;
z-index: 10;
`

export default Main;