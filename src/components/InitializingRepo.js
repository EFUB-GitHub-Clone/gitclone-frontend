import React from 'react';
import styled from 'styled-components';

// 다중 체크 박스
// 박스 선택 시 옵션 다시 선택

function InitializingRepo() {
    return (
        <div>
          <label>
            <input
              type="checkbox"
              name="README"
            />
            <h3>Add a README file</h3>
            <p>This is where you can write a long description for your project. &nbsp;
              <a 
                href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
                style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
            </p>
          </label>
          <label>
            <input
              type="checkbox"
              name="gitignore"
            />
            <h3>Add .gitignore</h3>
            <p>Choose which files not to track from a list of templates. &nbsp;
              <a 
                href="https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files"
                style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
            </p>
          </label>
          <label>
            <input
              type="checkbox"
              name="license"
            />
            <h3>Choose a license</h3>
            <p>A license tells others what they can and can't do with your code.  &nbsp;
              <a 
                href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"
                style={{textDecoration: 'none', color: '#0969da'}}>Learn more.</a>
            </p>
          </label>
        </div>
    );
}

export default InitializingRepo;