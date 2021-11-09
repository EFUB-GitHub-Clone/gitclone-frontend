import React from 'react';
import styled from 'styled-components';
import RepoBox from "../containers/RepoBox";
import pencil from "../assets/pencil.PNG";

function GitInfo() {
    return (
        <GitWrapper>
            <IntroBox>
                <Readme>
                    <p style={{'font-size':'0.75rem'}}>sua-kim / README.md</p>
                    <img style={{'width':'1.6rem', 'height':'1.6rem', 'cursor':'pointer'}} src={pencil} />
                </Readme>
                <p style={{'font-size':'1.1rem', 'font-weight': '600'}}>Hi there👋</p>
            </IntroBox>
            <SubTitle>
                <div>Pinned</div>
                <GitButton>Customize your pins</GitButton>
            </SubTitle>
            <PinnedWrapper>
                <RepoBox />
                <RepoBox />
                <RepoBox />
                <RepoBox />
            </PinnedWrapper>
            <SubTitle>
                <div>819 contributions in the last year</div>
                <GitButton>Contribution settings</GitButton>
            </SubTitle>
            <IntroBox>
                <SubTitle>
                    <GitButton style={{'font-size':'0.7rem'}}>Learn how we count contributions</GitButton>
                    <div style={{'display':'flex', 'align-items': 'center', 'gap':'0.2rem'}}>
                        <SmallFont>Less</SmallFont>
                        <Grass style={{'background':'#EBEDF0'}} />
                        <Grass style={{'background':'#9BE9A8'}} />
                        <Grass style={{'background':'#40C463'}} />
                        <Grass style={{'background':'#30A14E'}} />
                        <Grass style={{'background':'#216E39'}} />
                        <SmallFont>More</SmallFont>
                    </div>
                </SubTitle>
            </IntroBox>
            <Contribution>
                <div style={{'width':'82%'}}>
                    <SubTitle style={{'margin-top':'0'}}>Contribution activity</SubTitle>
                    <div style={{'display':'flex'}}>
                        <Date style={{'color':'#24292F'}}>November</Date>
                        <Date>2021</Date>
                        <Hr />
                    </div>


                </div>
                <div>
                    dfd
                </div>
            </Contribution>

        </GitWrapper>
    );
}

const GitWrapper = styled.div`
width: 70%;
padding-top: 2rem;
`

const IntroBox = styled.div`
border: 1px solid #D8DEE4;
border-radius: 0.5em;
padding: 0.5rem 1.5rem;
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
`

const SmallFont = styled.div`
font-size: 0.8rem;
color: #6E7781;
`

const Grass = styled.div`
width: 0.7rem; height: 0.7rem;
border-radius: 0.2rem;
`

const Contribution = styled.div`
display: flex;
margin-top: 2rem;
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

`

const Acitivity = styled.div`

`

export default GitInfo;