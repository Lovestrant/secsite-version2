import React from 'react'
import './index.css'
import Firstpage from './pages/Firstpage'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Loveandlife from './pages/Extensions/Loveandlife'
import Entertainment from './pages/Extensions/Entertainment'
import Politics from './pages/Extensions/Politics'
import Business from './pages/Extensions/Business'
import Others from './pages/Extensions/Others'
import Gamesandsports from './pages/Extensions/Gamesandsports'


function App() {
  return (
    <div className="app">
    
      <Router>
    
        <Switch>
        
       
          <Route exact path="/"> <Firstpage/></Route>
          <Route exact path="/Mainpage"><Mainpage/></Route> 
          <Route path="/Loveandlife"><Loveandlife/></Route> 
          <Route path="/Entertainment"><Entertainment/></Route> 
          <Route path="/Politics"><Politics/></Route> 
          <Route path="/Business"><Business/></Route> 
          <Route path="/Others"><Others/></Route>    
          <Route path="/Gamesandsports"><Gamesandsports/></Route>    
     
          </Switch>
      
      </Router>
    
    </div>
  );
}

export default App;
