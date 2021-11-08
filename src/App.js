import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import CreateRepo from './pages/CreateRepo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Main}/>
        <Route path="/create-repo" component={CreateRepo}/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
