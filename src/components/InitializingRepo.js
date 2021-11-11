import React from 'react';
import styled from 'styled-components';

// 다중 체크 박스
// 박스 선택 시 옵션 다시 선택

function InitializingRepo() {
    return (
        <div>
          <InitialTitle>Initialize this repository with:</InitialTitle>
          <Discribe>Skip this step if you’re importing an existing repository.</Discribe>
          <Label>
            <input
              type="checkbox"
              name="README"
            />
            <OptionInfo>
              <OptionTitle>Add a README file</OptionTitle>
              <SubDiscribe>This is where you can write a long description for your project. &nbsp;
                <a 
                  href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
                  style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
              </SubDiscribe>
            </OptionInfo>
          </Label>
          <Label>
            <input
              type="checkbox"
              name="gitignore"
            />
            <OptionInfo>
              <OptionTitle>Add .gitignore</OptionTitle>
              <SubDiscribe>Choose which files not to track from a list of templates. &nbsp;
                <a 
                  href="https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files"
                  style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
              </SubDiscribe>
            </OptionInfo>
          </Label>
          <Label>
            <input
              type="checkbox"
              name="license"
            />
            <OptionInfo>
              <OptionTitle>Choose a license</OptionTitle>
              <SubDiscribe>A license tells others what they can and can't do with your code.  &nbsp;
                <a 
                  href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"
                  style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
              </SubDiscribe>
            </OptionInfo>

          </Label>
        </div>
    );
}

const OptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
`

const InitialTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  color: #24292F;
  margin-bottom: 0;
`

const Discribe = styled.p`
  font-size: 1rem;
  margin: 0;
  color: gray;
`

const SubDiscribe = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: gray;
`

const Label = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0px 15px 0px;
`

const OptionTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  color: '#24292F';
  margin: 0;
`

export default InitializingRepo;