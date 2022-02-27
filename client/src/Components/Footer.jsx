import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import {  IconButton, Typography,Box, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main:"#781D42"
    },
   icon:
   {
    main:"#FFF8F3"
   },
    navbar:
    {
      main:"#781D42"
     
    }
    ,
    logo:{
  
    }
  },
});
export default function Footer() {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <AppBar  color="navbar" sx={{ top: 'auto', bottom: 0,flexDirection:'column' ,alignItems: 'center'}}>
          
        <Toolbar >
        <Box sx={{flexDirection:'column',alignItems: 'center',display:'flex',justifyContent:'center'}}>
    <Box>
            <IconButton
            size="large"
            color="icon"
            
            >
         <FacebookSharpIcon></FacebookSharpIcon>
         </IconButton>
         <IconButton
            size="large"
            color="icon"
            
            >
        <InstagramIcon></InstagramIcon>
         </IconButton>
         <IconButton
            size="large"
            color="icon"
            
            >
         <PinterestIcon></PinterestIcon>
         </IconButton>
         </Box>
         <Box>
         <Typography
            variant="h6"
            noWrap
     align='center'
            fontFamily="Lora"
           color="wheat"
          >
        copyrights @Awsome Blossoms
     </Typography>
     </Box> 
     </Box>
        </Toolbar>
      
      </AppBar>
      </ThemeProvider>
    </div>
  )
}
