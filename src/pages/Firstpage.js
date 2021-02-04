import React from 'react'
import './Firstpage.css'
import {NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


function Firstpage() {
    return (
      <div>
             <AppBar className="AppBar" position="sticky">
            <ToolBar className="ToolBar">
                <Typography className="Typography">
            <h1>
                Welcome to<br></br>
                SecSitee
         </h1>

            </Typography>
            </ToolBar>

          
        </AppBar>
      
        <div className="firsttext">
             <h2>Post anonymously.</h2>
        </div>
            <div className="secondtext">
                <h3>The SecSitee is the site where your anonymity is guaranteed.</h3>
            </div>
        <div className="thirdtext">
            <NavLink  to="/Mainpage">
            
            <Button color="secondary">See what is New</Button> 
            </NavLink>
      </div>
   

   
      </div>
     
           
      
    )
}

export default Firstpage
