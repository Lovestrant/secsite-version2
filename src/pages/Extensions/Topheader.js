
import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './Topheader.css'

import Slide from '@material-ui/core/Slide';
import {NavLink} from 'react-router-dom'
import Search from '@material-ui/icons/Search'
import ToolBar from '@material-ui/core/Toolbar'

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      );
  }


export default function Topheader(props) {
  return (
    <React.Fragment>
      
      <HideOnScroll {...props}>
        
      <AppBar className="AppBar" position="sticky">
            <ToolBar className="ToolBar">
               
                <Typography className="Typography">
                <div className="searchdiv">
                        <h1>SecSitee</h1>
                       
                <NavLink to="/Searchpage"><button className="btnsearch"><Search /></button></NavLink> 
                <NavLink to="/Postdiv"> <button className="postsomething"> post something</button></NavLink>
              
                        </div>  

                    <div className="nav">
                           <button><NavLink to="/Mainpage"className="nav-link" activeClassName="main-nav-active">General</NavLink> </button> 
                           <button><NavLink  to="/Loveandlife" className="nav-link" activeClassName="main-nav-active"> Love&life</NavLink></button> 
                           <button> <NavLink  to="/Politics" className="nav-link" activeClassName="main-nav-active">Politics</NavLink> </button>
                           <button> <NavLink  to="/Entertainment" className="nav-link" activeClassName="main-nav-active">Entertainment</NavLink> </button>
                            <button><NavLink  to="/Business" className="nav-link" activeClassName="main-nav-active">Business</NavLink></button>
                            <button><NavLink  to="/Gamesandsports" className="nav-link" activeClassName="main-nav-active">Games&Sports</NavLink></button>
                            <button><NavLink  to="/Others" className="nav-link" activeClassName="main-nav-active"> Others</NavLink></button>
                           
                        </div>
                        
                 </Typography>
            </ToolBar>
        </AppBar>
      </HideOnScroll>
   
     
      </React.Fragment>
  );
}
