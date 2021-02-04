import React from 'react'
import './Mainbody.css'
import Button from '@material-ui/core/Button'
import Share from '@material-ui/icons/Share'
import Comment from '@material-ui/icons/Comment'
import Repeat from '@material-ui/icons/Repeat'


function Mainbody() {
    return (
        <div>
          <div className="bodyicons">
                <Button className="Repost"> Repost <Repeat/> </Button>
                <Button className="Comment">Comment <Comment/> </Button>
                <Button className="Share">Share<Share/> </Button>
        </div>
     </div>
    )
}

export default Mainbody
