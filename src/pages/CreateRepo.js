import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from '../components/InputBox';
import PrivacySetting from '../components/PrivacySetting';
import InitializingRepo from '../components/InitializingRepo';
import CreateRepoBtn from '../components/CreateRepoBtn';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';

function CreateRepo() {

  const [myRepo, setMyrepo] = useState({
    repoName: "testRepo",
    description:"testDescription",
    type:true,
    language:"Java",
    readme:true,
    license:true,
    gitIgnore:true
  })

  const submitRepo = () => {
    axios.post('http://3.36.229.161:8080/api/user/1/repo', {
      repoName: myRepo.repoName,
      description: myRepo.description,
      type:true,
      language:"Java",
      readme: myRepo.readme,
      license: myRepo.license,
      gitIgnore: myRepo.gitIgnore
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  return (
      <div>
        <Header/>
        <CreateRepoWrapper>
          <Info>
            <p style={{color: "#57606A", fontSize: '0.89rem'}}>
              <h2 style={{fontWeight: 400, fontSize: '1.5rem', marginBottom: '3px', color: 'black'}}>Create a new repository</h2>
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
          <Submit>
            <CreateRepoBtn onClick={submitRepo}/>
          </Submit>
          <Foot>
            <Footer/>
          </Foot>
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
  padding-top: 25px;
  width: 55vw;
  border-bottom: 1px solid #D8DEE4;
`

const RepoName = styled.div`
  width: 55vw;
  margin-top: 30px;
  border-bottom: 1px solid #D8DEE4;
`


const Privacy = styled.div`
  width: 55vw;
  border-bottom: 1px solid #D8DEE4;
`

const Initialize = styled.div`
  width: 55vw;
  border-bottom: 1px solid #D8DEE4;
`

const Submit = styled.div`
  display: flex;
  width: 55vw;
  margin: 20px 0 50px 0;
`

const Foot = styled.div`
  width: 70vw;
  border-top: 1px solid #D8DEE4;
`

export default CreateRepo;