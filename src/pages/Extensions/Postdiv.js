import React from 'react'
//import Input from '@material-ui/core/Input'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useState } from "react";
import InputEmoji from "react-input-emoji";
import Button from '@material-ui/core/Button';
import './Postdiv.css'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

function Postdiv() {

    const [text, setText] = useState("");

    function handleOnEnter(text) {
      console.log("enter", text);
    }


      

    
    return (


    <div className="postdiv">

<InputEmoji
className="EMOJI"


      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Share anonymously..."
      
    />
 
 



<div className="radiodiv">
     
     <RadioGroup row>
     <p>Categorize your post:</p>
     <Radio type="radio" value="loveandlife" /> love & life
     <Radio type="radio" value="Politics"/> Politics
     <Radio type="radio" value="Entertainment"/> Entertainment
     <Radio type="radio" value="Business"/> Business
     <Radio type="radio" value="Gamesandsports"/> Games & sports
     <Radio type="radio" value="Others"/> Others
     </RadioGroup>

   </div>

   <div className="postdiv">
       <label className="Filelabel">Choose a SecFile:</label>

       <Button className="Button"> <AudiotrackIcon/>
      <label>Attach audio<input className="File" type="file" accept="audio/*" /></label> 
       </Button>
      
       <Button className="Button"><ImageIcon/>
       <label>Attach picture<input className="File" type="file" accept="image/*" /></label>
       </Button>
       
       <Button className="Button"> <VideoLibraryIcon/>
      <label>Attach Video<input className="File" type="file" accept="video/*" /></label> 
       </Button>

    </div>    <br></br> 
            <Button className="secpostbtn" variant="contained" color="secondary">
             SecPost
        </Button>

        </div>
    )
}

export default Postdiv
