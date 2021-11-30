import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import CreateRepo from './pages/CreateRepo';
import RepoDetail from './pages/RepoDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Main}/>
        <Route path="/create-repo" component={CreateRepo}/>
        <Route path="/repo-detail/:no" component={RepoDetail}/>
      </BrowserRouter>
    </div>

  );
}

export default App;
