import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Single from './Components/Single';
import Multi from './Components/Multi';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/single" component={Single} exact/>
      <Route path="/multi" component={Multi} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
