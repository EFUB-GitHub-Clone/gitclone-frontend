import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import {BiBookBookmark, BiCode, BiGitPullRequest, BiBookOpen, BiLineChart} from 'react-icons/bi';
import {VscIssues, VscProject} from 'react-icons/vsc';
import {BsPlayCircle, BsShieldExclamation} from 'react-icons/bs';

function RepoDetail() {
    return (
        <MainWrapper>
            <Header />
            <MenuWrapper>
                <Title>
                    <BiBookBookmark style={{'marginRight':'0.5rem', 'color':'#57606A'}}/>
                    sua-kim
                    <div style={{'marginRight':'0.5rem', 'marginLeft':'0.5rem', 'color':'#57606A'}}> / </div>
                    <div style={{'fontWeight':'600'}}>Algorithm</div>
                    <Status>Public</Status>
                </Title>
            </MenuWrapper>
            <MenuWrapper>
                <Menu>
                    <Button style={{'fontWeight':'600', 'color':'black', 'borderBottom':'2px solid #FD8C73'}}><BiCode style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem'}} />Code</Button>
                    <Button><VscIssues style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Issues</Button>
                    <Button><BiGitPullRequest style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Pull requests</Button>
                    <Button><BsPlayCircle style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Actions</Button>
                    <Button><VscProject style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Projects</Button>
                    <Button><BiBookOpen style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Wiki</Button>
                    <Button><BsShieldExclamation style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Security</Button>
                    <Button><BiLineChart style={{'paddingRight':'0.5rem', 'fontSize':'1.2frem', 'color':'#57606A'}} />Insights</Button>
                    <UploadBtn for='input-file'>Add file</UploadBtn>
                    <input type='file' id='input-file' style={{'display':'none'}} />
                </Menu>
            </MenuWrapper>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
text-align: center;
background: #F6F8FA;
`

const MenuWrapper = styled.div`
display: flex;
text-align: left;
width: 100%;
margin-bottom: 1rem;
`

const Title = styled.div`
display: flex;
margin-top: 2rem;
align-items: center;
font-size: 1.2rem;
color: #0969DA;
margin-left: 1.5vw;
`

const Menu = styled.div`
display: flex;
align-items: flex-end;
gap: 1vw;
margin-left: 1.5vw;
`

const Status = styled.div`
color: #57606A;
border: 1px solid #D8DEE4;
padding: 0.1rem 0.4rem;
border-radius: 5rem;
font-size: 0.75rem;
font-weight: 600;
margin-left: 0.5vw;
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
`

const UploadBtn = styled.label`
display: flex;
justify-content: center;
align-items: center;
height: 2rem;
font-size: 0.9rem; font-weight: 600;
border: 1px #D8DEE4 solid; border-radius: 0.5rem;
background: #FFFFFF;
box-sizing: inherit;
padding: 0 1rem;
margin-bottom: 0.2rem; margin-left: 1rem;
cursor: pointer;
`

const RepoNum = styled.div`
background: #EFF1F3;
padding: 0.3rem;
border-radius: 40%;
font-size: 0.75rem;
font-weight: 600;
margin-left: 0.3rem;
`



const Foot = styled.div`
display: flex;
width: 70vw;
margin-top: 1rem;
border-top: 1px solid #D8DEE4;
`

export default RepoDetail;