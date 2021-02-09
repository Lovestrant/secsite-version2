import React from 'react'
import './App.css'
import Firstpage from './pages/Firstpage'
import Searchpage from './pages/Extensions/Searchpage'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Loveandlife from './pages/Extensions/Loveandlife'
import Postdiv from './pages/Extensions/Postdiv'
import Entertainment from './pages/Extensions/Entertainment'
import Politics from './pages/Extensions/Politics'
import Business from './pages/Extensions/Business'
import Others from './pages/Extensions/Others'
import Gamesandsports from './pages/Extensions/Gamesandsports'


function App() {
  return (
    <div className="App">
    
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
          <Route path="/Searchpage"><Searchpage/></Route>  
          <Route path="/Postdiv"><Postdiv/></Route>        
     
          </Switch>
      
      </Router>
    
    </div>
  );
}

export default App;
