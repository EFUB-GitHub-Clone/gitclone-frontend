import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Info = styled.div`
  height: 10vh;
`

function CreateRepo() {
  return (
      <div>
          <Header />
          <Info>
            <h2>Create a new repository</h2>
            <p>A repository contains all project files, including the revision history. Already have a project repository elsewhere?</p>
            <a href="https://github.com/new/import">Import a repository</a>
          </Info>
      </div>
  );
}

export default CreateRepo;