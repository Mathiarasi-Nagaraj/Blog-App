import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function Footer() {
  return (
    <div>
          <AppBar  color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar >
            <IconButton
            size="large"
            color="secondary"
            
            >
         <FacebookSharpIcon></FacebookSharpIcon>
         </IconButton>
         <IconButton
            size="large"
            color="secondary"
            
            >
        <InstagramIcon></InstagramIcon>
         </IconButton>
         <IconButton
            size="large"
            color="secondary"
            
            >
         <PinterestIcon></PinterestIcon>
         </IconButton>

         <span>copyrights @Awsome Blossoms</span>
        </Toolbar>
      </AppBar>
    </div>
  )
}
