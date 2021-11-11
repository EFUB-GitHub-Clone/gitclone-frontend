import React, {useState} from 'react';
import styled from 'styled-components';
import {RiBookLine} from 'react-icons/ri'
import {BiLockAlt} from 'react-icons/bi'

// radio 상태 관리 함수 넣어야 함

function PrivacySetting() {
  const [checkedItems, setCheckedItems] = useState();
  return (
      <PrivacyWrapper>
        <Label>
          <input
            type="radio"
            name="PrivacySetting"
            value="Public"
            checked={true}
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
            name="PrivacySetting"
            value="Public"
            checked={true}
          />
          <BiLockAlt style={{fontSize: '40px', color: '#9A6700', marginRight: '3px'}}/>
          <OptionInfo>
            <OptionTitle>Private</OptionTitle>
            <Discribe>You choose who can see and commit to this repository.</Discribe>
          </OptionInfo>
        </Label>
      </PrivacyWrapper>
  );
}

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

export default PrivacySetting;