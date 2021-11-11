import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import PrivacySetting from '../components/PrivacySetting';
import InitializingRepo from '../components/InitializingRepo';

function CreateRepo() {
  return (
      <div>
        <CreateRepoWrapper>
          <Info>
            <p>
              <h2 style={{fontWeight: 400, fontSize: '24px', marginBottom: '0'}}>Create a new repository</h2>
              A repository contains all project files, including the revision history. Already have a project repository elsewhere?<br />
              <a href="https://github.com/new/import" style={{textDecoration: 'none', color: '#0969da'}}>Import a repository.</a>
            </p>
          </Info>
          <RepoName>
           <InputBox/>
          </RepoName>
          <Privacy>
            <PrivacySetting/>
          </Privacy>
          <Initialize>
            <InitializingRepo/>
          </Initialize>
        </CreateRepoWrapper>

      </div>
  );
}

const CreateRepoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8vh;
  width: 65vw;
  border-bottom: 1px solid #D8DEE4;
`

const RepoName = styled.div`
  width: 65vw;
  border-bottom: 1px solid #D8DEE4;
`


const Privacy = styled.div`
  width: 65vw;
  border-bottom: 1px solid #D8DEE4;
`

const Initialize = styled.div`
  width: 65vw;
  border-bottom: 1px solid #D8DEE4;
`

export default CreateRepo;