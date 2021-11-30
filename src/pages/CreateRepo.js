import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {MdArrowDropDown} from 'react-icons/md';
import {RiBookLine} from 'react-icons/ri'
import {BiLockAlt} from 'react-icons/bi'
import axios from 'axios';

function CreateRepo() {

  const [myRepo, setMyrepo] = useState({
    repoName: "",
    description:"",
    type:'Public',
    language:"Java",
    readme:false,
    license:false,
    gitIgnore:false
  })

  const { repoName, description, type, readme, license, gitIgnore } = myRepo;

  const [color, setColor] = useState('#94d3a2')

  const onTextChange = (e) => {
    const newRepo = {
      ...myRepo,
      [e.target.name] : e.target.value
    };
    setMyrepo(newRepo);
  };

  const handleChange = (e) => {
    console.log(`선택한 값:  ${e.target.value}`)
    const checkedRepo = {
      ...myRepo,
      type: e.target.value
    };
    setMyrepo(checkedRepo);
  };

  const onClickOption = (e) => {
    const clickOption = {
      ...myRepo,
      [e.target.name] : e.target.checked
    };
    setMyrepo(clickOption);
  };

  const submitRepo = async() => {
    axios.post('http://3.36.229.161:8080/api/user/1/repo', myRepo).then(()=>{
      alert('등록 완료!');
    })
  };

  const colorChange = () => {
    color === '#94d3a2' ? setColor('#2da44e') : setColor('#94d3a2');
  };

  const Button = styled.button`
  background-color: ${color};
  padding: 0.5rem 2rem;
  border-radius: 6px;
  border: 1px solid lightgray;
  font-weight: 600;
  color: white;
`;

  const onClick = () => {
    submitRepo();
    colorChange();
    console.log(myRepo);
  }

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
            <InputBoxWrapper>
              <MustInputWrapper>
                <SelectOwner>
                  <Title>Owner <span style={{color:'#D02531'}}>*</span></Title>
                  <OwnerButton>
                    <ProfileImg/>
                    <OwnerName>L-Yunji</OwnerName>
                    <MdArrowDropDown/>
                  </OwnerButton>
                </SelectOwner>
                <h1 style={{margin: '10px', fontWeight: '350', paddingTop: '27px'}}>/</h1>
                <InputNameBox>
                  <Title>Repository name <span style={{color:'#D02531'}}>*</span></Title>
                  <Input name="repoName" type="text" onChange={onTextChange} value={repoName} style={{width: '350px'}}/>
                </InputNameBox>
              </MustInputWrapper>
              <p style={{fontSize: '0.9rem', margin: 0}}>Great repository names are short and memorable. Need inspiration? How about &nbsp;
                <span style={{color:'green', fontWeight: '500'}}>cuddly-waddle?</span>
              </p>
              <InputTextBox>
                <Title>Description <span style={{fontWeight: '350', fontSize: '0.9rem'}}>(optional)</span></Title>
                <Input name="description" type="text" onChange={onTextChange} value={description} style={{width: "98%"}} />
              </InputTextBox>
            </InputBoxWrapper>
          </RepoName>
          <Privacy>
            <PrivacyWrapper>
              <Label>
                <input
                  type="radio"
                  id='Public'
                  value="public"
                  name={type}
                  onChange={handleChange}
                />
                <RiBookLine style={{fontSize: '40px', color: '#57606A', marginRight: '3px'}}/>
                <OptionInfo>
                  <OptionTitle>Public</OptionTitle>
                  <Discribe>Anyone on the internet can see this repository. You choose who can commit.</Discribe>
                </OptionInfo>
              </Label>
              <Label>
                <input
                  type="radio"
                  id='Private'
                  value="private"
                  name={type}
                  onChange={handleChange}
                />
                <BiLockAlt style={{fontSize: '40px', color: '#9A6700', marginRight: '3px'}}/>
                <OptionInfo>
                  <OptionTitle>Private</OptionTitle>
                  <Discribe>You choose who can see and commit to this repository.</Discribe>
                </OptionInfo>
              </Label>
            </PrivacyWrapper>
          </Privacy>
          <Initialize>
          <InitialTitleInitial>Initialize this repository with:</InitialTitleInitial>
          <DiscribeInitial>Skip this step if you’re importing an existing repository.</DiscribeInitial>
          <LabelInitial>
            <input
              id= 'Read'
              type="checkbox"
              name="readme"
              checked={readme}
              onClick={onClickOption}
            />
            <OptionInfoInitial>
              <OptionTitleInitial>Add a README file</OptionTitleInitial>
              <SubDiscribeInitial>This is where you can write a long description for your project. &nbsp;
                <a 
                  href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
                  style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
              </SubDiscribeInitial>
            </OptionInfoInitial>
          </LabelInitial>
          <LabelInitial>
            <input
              id = 'Git'
              type="checkbox"
              name="gitIgnore"
              checked={gitIgnore}
              onClick={onClickOption}
            />
            <OptionInfoInitial>
              <OptionTitleInitial>Add .gitignore</OptionTitleInitial>
              <SubDiscribeInitial>Choose which files not to track from a list of templates. &nbsp;
                <a 
                  href="https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files"
                  style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
              </SubDiscribeInitial>
            </OptionInfoInitial>
          </LabelInitial>
          <LabelInitial>
            <input
             id ='Lic'
              type="checkbox"
              name="license"
              checked={license}
              onClick={onClickOption}
            />
            <OptionInfoInitial>
              <OptionTitleInitial>Choose a license</OptionTitleInitial>
              <SubDiscribeInitial>A license tells others what they can and can't do with your code.  &nbsp;
                <a 
                  href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"
                  style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
              </SubDiscribeInitial>
            </OptionInfoInitial>

          </LabelInitial>
          </Initialize>
          <Submit>
          <Button onClick={onClick}>
            Create repository
          </Button>
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

const InputBoxWrapper = styled.div`
  padding-bottom: 15px;
`

const MustInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0px;
  flex-wrap: wrap;
`

const SelectOwner = styled.div`

`

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 0.9rem;
`

const OwnerButton = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  font-family: inherit;
  line-height: 20px;
  padding: 0rem 1rem 0rem 1rem; 
  align-items: center;
`
const ProfileImg = styled.img`
  border:1px solid lightgray;
  border-radius:50%;
  height:1.5rem;
  width:1.5rem;
  background: url("https://1.gall-img.com/hygall/files/attach/images/82/253/713/282/f2d0ddaa6f287abd31f843fe54d28807.png");
  background-size: 1.5rem;
  background-color: white;
`

const OwnerName = styled.h3`
  font-weight: 500;
  margin: 0.5rem 4px 0.5rem 8px;
`

const Input = styled.input`
  background-color: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  font-family: inherit;
  line-height: 20px;
  font-size: 1rem;
  padding: 0.5rem 0rem 0.5rem 1rem; 
  :focus {
    outline: 1px solid #0969da;
    box-shadow: 0 0 0 3px rgba(9,105,218,0.3);
  }
`

const InputNameBox = styled.div`

`

const InputTextBox = styled.div`
`

const PrivacyWrapper = styled.div`

`

const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px 15px 0px;
`

const OptionTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  color: '#24292F';
  margin: 0;
`

const OptionInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Discribe = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: gray;
`
const OptionInfoInitial = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
`

const InitialTitleInitial = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  color: #24292F;
  margin-bottom: 0;
`

const DiscribeInitial = styled.p`
  font-size: 1rem;
  margin: 0;
  color: gray;
`

const SubDiscribeInitial = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: gray;
`

const LabelInitial = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0px 15px 0px;
`

const OptionTitleInitial = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  color: '#24292F';
  margin: 0;
`


export default CreateRepo;