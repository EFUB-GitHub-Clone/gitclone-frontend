import React, { useState } from 'react';
import styled from 'styled-components';

function InputBox() {

  const [myRepo, setMyRepo] = useState({
    Owner: '',
    RepoName: '',
    Description: ''
  })

  return (
      <InputBoxWrapper>
        <MustInputWrapper>
          <SelectOwner>
            <Title>Owner</Title>
            <Input type="text" style={{width: '300px'}}></Input>
          </SelectOwner>
          <h1 style={{margin: '10px', fontWeight: '350', paddingTop: '35px'}}>/</h1>
          <InputNameBox>
            <Title>Repository name</Title>
            <Input type="text" style={{width: '350px'}}></Input>
          </InputNameBox>
        </MustInputWrapper>
        <p>Great repository names are short and memorable. Need inspiration? How about &nbsp;
          <span style={{color:'green', fontWeight: '500'}}>cuddly-waddle?</span>
        </p>
        <InputTextBox>
          <Title>Description <span style={{fontWeight: '350', fontSize: '0.9rem'}}>(optional)</span></Title>
          <Input type="text" style={{width: "98%"}}></Input>
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
`

const Input = styled.input`
  background-color: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  font-family: inherit;
  line-height: 20px;
  font-size: 1rem;
  padding: 0.5rem 0rem 0.5rem 1rem; 
`

const InputNameBox = styled.div`

`

const InputTextBox = styled.div`
`

export default InputBox;