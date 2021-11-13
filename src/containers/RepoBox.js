import React from 'react';
import styled from 'styled-components';
import repo from '../assets/repo.PNG';
import menu from '../assets/menu.PNG';

function RepoBox() {
    return (
        <Box>
            <RepoTitle>
                <div style={{'display':'flex', 'alignItems': 'center'}}>
                    <Icon src={repo}/>
                    <RepoName>Algorithm</RepoName>
                </div>
                <div style={{'display':'flex', 'alignItems': 'center', 'gap':'0.5rem'}}>
                    <Status>Public</Status>
                    <Image src={menu} />
                </div>
            </RepoTitle>
            <RepoContent>알고리즘 소스코드 기록 레포</RepoContent>
            <Language>
                <Circle style={{'background':'#3572A5'}} />
                <RepoContent>Python</RepoContent>
            </Language>
        </Box>
    );
}

const Box = styled.div`
width: 47%;
padding: 0.5rem;
margin-bottom: 0.5rem;
border: 1px solid #D8DEE4;
border-radius: 0.5em;
text-align: left;
`

const RepoTitle = styled.div`
display: flex;
justify-content: space-between;
font-size: 0.9rem;
`

const Icon = styled.img`
padding: 0.2rem
`

const RepoName = styled.div`
color: #0969DA;
font-weight: 600;
cursor: pointer;
`

const Image = styled.img`
cursor: pointer;
`

const RepoContent = styled.div`
color: #57606A;
font-size: 0.75rem;
padding: 0.3rem 0.35rem;
`

const Status = styled.div`
color: #57606A;
border: 1px solid #D8DEE4;
padding: 0.1rem 0.4rem;
border-radius: 5rem;
font-size: 0.75rem;
font-weight: 600;
`

const Language = styled.div`
display: flex;
padding: 0.3rem;
align-items: center;
margin-top: 0.5rem;
`

const Circle = styled.div`
width: 0.8rem; height: 0.8rem;
border-radius: 50%;
`

export default RepoBox;