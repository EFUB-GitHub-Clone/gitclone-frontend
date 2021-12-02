import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import CreateRepo from './pages/CreateRepo';
import RepoDetail from './pages/RepoDetail';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main}/>
        <Route path="/create-repo" component={CreateRepo}/>
        <Route path="/repo-detail/:no" component={RepoDetail}/>
      </Router>
    </div>

  );
}

export default App;
