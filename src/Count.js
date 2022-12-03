import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack'; 
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function Count(){  
    const [like,setLike]=useState(0); 
    const [dislike,setDislike]=useState(0)
    return( 
        <> 
        <div> 
        <IconButton color="primary" aria-label="delete" onClick={()=>setLike(like+1)}>
       
        <Badge badgeContent={like} color="primary">
        👍
</Badge>
</IconButton>
         
<IconButton aria-label="delete" color="primary" onClick={()=>setDislike(dislike+1)}>

<Badge badgeContent={dislike} color="primary">
😶
</Badge>
</IconButton>
        
        </div>
        
        </>
    )
}  
 
export default Count;