import React, {useState} from 'react';
import styled from 'styled-components';
import hide from "../assets/hide.PNG";
import commit from "../assets/commit.PNG";
import fork from '../assets/fork.PNG';
import issue from '../assets/issue.PNG';
import organization from '../assets/organization.PNG';
import merged from '../assets/merged.PNG';
import check from '../assets/check.PNG';
import logo from '../assets/bigLogo.PNG';

function Contribution() {
    const [display, setDisplay] = useState([{id: 0, active: true}, {id: 1, active: true}, {id: 2, active: true}]);
    const onDisplay = (n) => {
        setDisplay(display.map(type => type.id === n ? { ...type, active: !type.active } : type));
    };
    return (
        <div>
            <div style={{'display':'flex'}}>
                <Date style={{'color':'#24292F'}}>November</Date>
                <Date>2021</Date>
                <Hr />
            </div>
            <Timeline style={{'height':'2rem'}}/>
            <Activity>
                <ActivitySummary>
                    <img src={commit} />
                    <div style={{'marginLeft':'1rem'}}>Created 13 commits in 3 repositories</div>
                </ActivitySummary>
                <Button onClick = {()=>onDisplay(0)}><img src={hide} /></Button>
            </Activity>
            { display[0].active ? (
                <Timeline>
                    <ActivityWrapper>
                        <ActivityDetail>
                            <RepoName>EFUB-GitHub-Clone/gitclone-frontend</RepoName>
                            <CommitNum>6 commits</CommitNum>
                        </ActivityDetail>
                        <Graph style={{'background':'#40C463'}}/>
                    </ActivityWrapper>
                    <ActivityWrapper>
                        <ActivityDetail>
                            <RepoName>2-FleaEWHA/FleaEWHA-frontend</RepoName>
                            <CommitNum>6 commits</CommitNum>
                        </ActivityDetail>
                        <Graph style={{'background':'#40C463'}}/>
                    </ActivityWrapper>
                    <ActivityWrapper>
                        <ActivityDetail>
                            <RepoName>sua-kim/responsive-website</RepoName>
                            <CommitNum>1 commits</CommitNum>
                        </ActivityDetail>
                        <Graph style={{'background':'#9BE9A8', 'width': '1rem'}}/>
                    </ActivityWrapper>
                </Timeline>
            ):''}
            <Timeline style={{'height':'2rem'}}/>


            <Activity>
                <ActivitySummary>
                    <img src={fork} />
                    <div style={{'marginLeft':'1rem'}}>Opened 2 pull requests in 1 repository</div>
                </ActivitySummary>
                <Button onClick = {()=>onDisplay(1)}><img src={hide} /></Button>
            </Activity>
            { display[1].active ? (
                <Timeline>
                    <ActivityWrapper style={{'justifyContent':'space-between', 'paddingRight':' 0.5rem'}}>
                        <RepoName>EFUB-GitHub-Clo...</RepoName>
                        <CommitNum>merged</CommitNum>
                    </ActivityWrapper>
                    <ActivityWrapper style={{'justifyContent':'space-between', 'paddingRight':' 0.5rem'}}>
                        <div style={{'display':'flex'}}>
                            <img src={merged} /><RepoName style={{'color':'black'}}>modify: 헤더 수정</RepoName>
                        </div>
                        <CommitNum>Nov 7</CommitNum>
                    </ActivityWrapper>
                    <ActivityWrapper style={{'justifyContent':'space-between', 'paddingRight':' 0.5rem'}}>
                        <div style={{'display':'flex'}}>
                            <img src={merged} /><RepoName style={{'color':'black'}}>feat: 헤더 퍼블리싱</RepoName>
                        </div>
                        <CommitNum>Nov 7</CommitNum>
                    </ActivityWrapper>
                </Timeline>
            ): ''}
            <Timeline style={{'height':'2rem'}}/>


            <Activity>
                <ActivitySummary>
                    <img src={issue} />
                    <div style={{'marginLeft':'1rem'}}>Opened 1 issue in 1 repository</div>
                </ActivitySummary>
                <Button onClick = {()=>onDisplay(2)}><img src={hide} /></Button>
            </Activity>
            { display[2].active ? (
                <Timeline>
                    <ActivityWrapper style={{'justifyContent':'space-between', 'paddingRight':' 0.5rem'}}>
                        <RepoName>EFUB-GitHub-Clo...</RepoName>
                        <CommitNum>closed</CommitNum>
                    </ActivityWrapper>
                    <ActivityWrapper style={{'justifyContent':'space-between', 'paddingRight':' 0.5rem'}}>
                        <div style={{'display':'flex'}}>
                            <img src={check} /><RepoName style={{'color':'black'}}>Header 추가</RepoName>
                        </div>
                        <CommitNum>Nov 7</CommitNum>
                    </ActivityWrapper>
                </Timeline>
            ):''}
            <Timeline style={{'height':'2rem'}}/>


            <Activity>
                <ActivitySummary>
                    <img src={organization} />
                    <div style={{'marginLeft':'1rem'}}>Joined the EFUB-GitHub-Clone organization</div>
                </ActivitySummary>
                <Button>on Nov 6</Button>
            </Activity>
            <Timeline>
                <ActivityWrapper style={{'paddingRight':' 0.5rem'}}>
                    <OrganizationBox>
                        <img src={logo} />
                        <OrganizationName>EFUB-GitHub-Clone</OrganizationName>
                    </OrganizationBox>
                </ActivityWrapper>
            </Timeline>
            <Timeline style={{'height':'2rem'}}/>
            <div style={{'display':'flex', 'justifyContent': 'center'}}>
                <MoreBtn>Show more activity</MoreBtn>
            </div>
            <CommitNum>Seeing something unexpected? Take a look at the GitHub profile guide.</CommitNum>
        </div>
    );
}

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
outline: none;
background: none;
border: none;
box-sizing: inherit;
font-size: 0.75rem;
color: #6E7781;
cursor: pointer;
&:hover {
  color: #409BEB;
}
`

const Date = styled.div`
font-size: 0.8rem;
color: #6E7781;
margin-right: 0.3rem;
font-weight: 600;
`

const Hr = styled.hr`
width: 85%;
background: #D8DEE4;
border: 0;
`

const Timeline = styled.div`
margin-left: 0.7rem;
border-left: 2px solid #D8DEE4;
`

const Activity = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: #24292F;
font-size: 1rem;
`

const ActivitySummary = styled.div`
display: flex;
align-contents: center;
`

const ActivityWrapper = styled.div`
display: flex;
align-items: center;
padding: 0rem 0rem 0.2rem 2rem;
`

const ActivityDetail = styled.div`
display: flex;
align-items: center;
text-align: left;
gap: 0.5rem;
width: 75%;
`

const RepoName = styled.div`
color: #0969DA;
font-size: 0.9rem;
cursor: pointer;
`

const CommitNum = styled.div`
color: #6E7781;
font-size: 0.8rem;
text-align: left;
`

const Graph = styled.div`
width: 5rem; height: 0.5rem;
border: none;
border-radius: 1rem;
`

const OrganizationBox = styled.div`
display: flex;
align-items: flex-start;
width: 100%;
border: 1px solid #D8DEE4;
border-radius: 0.5em;
padding: 1.2rem 1.5rem;
text-align: left;
`

const OrganizationName = styled.div`
margin-left: 1rem;
font-size: 1.2rem;
font-weight: 600;
`

const MoreBtn = styled.div`
width: 95%;
border: 1px solid #D8DEE4;
border-radius: 0.5em;
padding: 0.5rem;
text-align: center;
color: #0969DA;
font-size: 0.75rem;
font-weight: 600;
margin-top: 1rem; margin-bottom: 1.5rem;
`
export default Contribution;