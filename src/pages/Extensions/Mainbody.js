import React from 'react'
import './Mainbody.css'
import Button from '@material-ui/core/Button'
import Share from '@material-ui/icons/Share'
import Comment from '@material-ui/icons/Comment'
import Repeat from '@material-ui/icons/Repeat'
import { useState, useEffect } from "react";
import axios from 'axios'

function Mainbody() {

    const [textpostsList, setTextpostsList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3003/api/get").then((response) =>{
          setTextpostsList(response.data);
        });
      })
    
    return (
        <div>
        {textpostsList.map((val) => {
            return(
           <div>
                   <div className="firetextpost">
                    {val.textpost} 
                </div>

      <div className="btns">
      <p> <Button className="Comment">Comment <Comment/> </Button></p>
      <p> <Button className="Repost"> Repost <Repeat/> </Button></p>
  
     <p><Button className="Share">Share<Share/> </Button></p> 
     
      </div>

</div>

            )
        })}

     </div>
    )
}

export default Mainbody
