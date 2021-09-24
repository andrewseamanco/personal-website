import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Halle from './pages/Halle';
import TextGame from './pages/textGame'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pages/Halle' component={Halle}/>
        <Route path='/textGame' component={TextGame}/>
      </Switch>
    </Router>
  );
}

export default App;
