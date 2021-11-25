import React, { useState } from 'react';
import styled from 'styled-components';
import {MdArrowDropDown} from 'react-icons/md';

// repoName, description 받아서 저장해야 함

function InputBox() {

  const [myrepo, setMyrepo] = useState({
    repoName: '',
    description: ''
  });

  const { repoName, description } = myrepo;

  const onChange = (e) => {
    const { value, name } = e.target;
    setMyrepo({
      ...myrepo,
      [name] : value
    });
  };

  return (
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
            <Input name="repoName" type="text" onChange={onChange} value={repoName} style={{width: '350px'}}/>
          </InputNameBox>
        </MustInputWrapper>
        <p style={{fontSize: '0.9rem', margin: 0}}>Great repository names are short and memorable. Need inspiration? How about &nbsp;
          <span style={{color:'green', fontWeight: '500'}}>cuddly-waddle?</span>
        </p>
        <InputTextBox>
          <Title>Description <span style={{fontWeight: '350', fontSize: '0.9rem'}}>(optional)</span></Title>
          <Input name="description" type="text" onChange={onChange} value={description} style={{width: "98%"}} />
        </InputTextBox>
      </InputBoxWrapper>
  );
}

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
const ProfileImg = styled.image`
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

export default InputBox;