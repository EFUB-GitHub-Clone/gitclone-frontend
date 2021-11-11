import React, { useState } from 'react';
import styled from 'styled-components';

// 받은 정보값 백에 넘겨주기

function CreateRepoBtn() {
  const [color, setColor] = useState('#94d3a2')
  const onClick = () => {
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

  return (
      <Button onClick={onClick}>
        Create repository
      </Button>
  );
}

export default CreateRepoBtn;