import React from 'react';
import {Navbar} from './components';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App=()=>{
  return (
    <>
      heloooo
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
