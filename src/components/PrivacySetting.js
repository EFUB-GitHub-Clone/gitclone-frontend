import React, {useState} from 'react';
import styled from 'styled-components';
import {RiBookLine} from 'react-icons/ri'
import {BiLockAlt} from 'react-icons/bi'

// radio 상태 관리 함수 넣어야 함

function PrivacySetting() {
  const [checkedItems, setCheckedItems] = useState();
  return (
      <PrivacyWrapper>
        <label>
          <input
            type="radio"
            name="PrivacySetting"
            value="Public"
            checked={true}
          />
          <RiBookLine style={{fontSize: '2.5rem'}}/>
          <h3>Public</h3>
          <p>Anyone on the internet can see this repository. You choose who can commit.</p>
          <br/>
        </label>
        <label>
          <input
            type="radio"
            name="PrivacySetting"
            value="Public"
            checked={true}
          />
          <BiLockAlt style={{fontSize: '2.5rem'}}/>
          <h3>Private</h3>
          <p>You choose who can see and commit to this repository.</p>
        </label>
      </PrivacyWrapper>
  );
}

const PrivacyWrapper = styled.div`

`

export default PrivacySetting;