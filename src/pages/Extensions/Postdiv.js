

import React from 'react'
import AttachmentIcon from '@material-ui/icons/Attachment';
import { useState } from "react";
import InputEmoji from "react-input-emoji";
import Button from '@material-ui/core/Button';
import './Postdiv.css'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import axios from 'axios'
import Topheader from './Topheader'


function Postdiv() {





  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  


      const submitPost = () => {
        axios.post("http://localhost:3003/api/insert", {textPost: text, 
        category: category
      }).then(() =>{
        alert("Secpost Success");
      });
      };


    
    
    return (

  
  <div className="postdiv">
  <Topheader/> 
  <div className="div">
  <div className="form">
              
              <InputEmoji
              className="EMOJI"
  
  
              value={text}
            
              onChange={setText}
  
            borderColor="red"
              placeholder="Share anonymously..."
              
            />
        
        
  
  
        
       
  
            <RadioGroup row>
            <label style={{color: "green"}} >Categorize your post:</label>
            <Radio type="radio" value="loveandlife" 
            name={category} 
                onChange={(e) => {
                setCategory(e.target.value);
              }}
        /> love & life
            <Radio type="radio" value="Politics"
              name={category} 
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
            /> Politics
            <Radio type="radio" value="Entertainment"
            name={category} 
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
            /> Entertainment
            <Radio type="radio" value="Business"
            name={category} 
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
            /> Business
            <Radio type="radio" value="Gamesandsports"
            name={category} 
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
            /> Games & sports
            <Radio type="radio" value="Others"
            name={category} 
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
            /> Others
            </RadioGroup>
  
      
  
           
              <label className="Filelabel">Choose a SecFile:</label>
  
        
                   
              <Button className="Button"><AttachmentIcon/>
              <label><input className="File" type="file" accept="image/*,video/*, audio/*" /></label>
              </Button>
              <br></br><br></br>
              <Button className="secpostbtn" variant="contained" color="secondary" onClick={submitPost}>
                    SecPost
                </Button>
            
                </div>   
  
         
            </div>



  </div>
    )
}

export default Postdiv
