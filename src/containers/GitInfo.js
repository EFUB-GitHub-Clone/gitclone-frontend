import React, {useEffect, useState} from 'react';
import ReactTooltip from 'react-tooltip';
import GitHubCalendar from 'react-github-calendar';
import axios from 'axios';
import styled from 'styled-components';
import RepoBox from "../components/RepoBox";
import Contribution from './Contribution';
import {BiPencil} from 'react-icons/bi';


function GitInfo() {
    const [repo, setRepo] = useState();
    useEffect(async () => {
            try {
                const response = await axios.get(`http://3.36.229.161:8080/api/repo`);
                setRepo(response.data);
            } catch (e) {
                console.log(e)
            }
        }, []
    );

    return (
        <GitWrapper>
            <IntroBox>
                <Readme>
                    <p style={{'fontSize':'0.75rem'}}>sua-kim / README.md</p>
                    <BiPencil style={{'cursor':'pointer'}}/>
                </Readme>
                <p style={{'fontSize':'1.1rem', 'fontWeight': '600'}}>Hi there👋</p>
            </IntroBox>
            <SubTitle>
                <div>Pinned</div>
                <GitButton>Customize your pins</GitButton>
            </SubTitle>
            <PinnedWrapper>
                { repo ? repo.map((info) => {
                    return (
                        <RepoBox id={info.repoIdx} title={info.repoName} description={info.description} language={info.language}
                        fileList={info.fileList}/>
                    );
                }):''}
            </PinnedWrapper>
            <SubTitle>819 contributions in the last year</SubTitle>
            <ContributionBox>
                <GitHubCalendar username="sua-kim" hideTotalCount showWeekdayLabels fontSize={10} >
                    <ReactTooltip html />
                </GitHubCalendar>
            </ContributionBox>
            <Contribute>
                <div style={{'width':'82%'}}>
                    <SubTitle style={{'marginTop':'0'}}>Contribution activity</SubTitle>
                    <Contribution />
                </div>
                <div style={{'padding':'0 2rem'}}>
                    <Year style={{'color':'white'}}>2021</Year>
                    <Year style={{'background':'none'}}>2020</Year>
                    <Year style={{'background':'none'}}>2019</Year>
                </div>
            </Contribute>
        </GitWrapper>
    );
}

const GitWrapper = styled.div`
width: 50vw;
padding-top: 2rem;
`

const IntroBox = styled.div`
border: 1px solid #D8DEE4;
border-radius: 0.5em;
padding: 0.5vw 1.5vw;
text-align: left;
`

const Readme = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const SubTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem; margin-bottom: 0.8rem;
color: #24292F;
font-size: 1rem;
`

const GitButton = styled.button`
display: flex;
font-size: 0.8rem;
align-items: center;
justify-content: center;
outline: none;
background: none;
border: none;
box-sizing: inherit;
color: #6E7781;
&:hover {
  cursor: pointer;
  color: #409BEB;
}
`

const PinnedWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
text-align: left;
`

const ContributionBox = styled.div`
display: flex;
justify-content: center;
border: 1px solid #D8DEE4;
border-radius: 0.5em;
padding: 1rem 2.5rem;
`

const Contribute = styled.div`
display: flex;
margin-top: 2rem;
`

const Year = styled.button`
display: flex;
font-size: 0.8rem;
text-align: left;
width: 100%;
padding: 0.6rem 1.4rem;
outline: none;
border-radius: 0.6rem;
background: #0969DA;
border: none;
box-sizing: inherit;
color: #6E7781;
&:hover {
  cursor: pointer;
}
`

export default GitInfo;