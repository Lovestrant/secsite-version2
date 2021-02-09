import Search from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ToolBar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Mainbody from './Mainbody'
import {NavLink } from "react-router-dom";
import './Searchpage.css'


function Searchpage() {
    return (
        <div>
            <AppBar position="sticky" className="searchAppBar">
                <ToolBar className="searchAppBar">
                    <Typography className="searchAppBar">
                        <p className="paragraphHeader">
                        <NavLink to="/Mainpage"><ArrowBackIcon/></NavLink>
                        <textarea col="100" type="text" placeholder="Search SecSitee..." className="Searchinput"/>
                        <Button variant="filled" color="secondary"><Search/></Button>
                        </p>
                        
                    </Typography>
                </ToolBar>
            </AppBar>
        <Mainbody/>
        </div>
    )
}

export default Searchpage

