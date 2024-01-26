import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../../utils/Image';
import gmail from '../../assets/images/gmail.png'
import '../../utils/image.css'

const Navbar = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#f9f9f9'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color:'#3c3c3c' }}>
            <MenuIcon/>
          </IconButton>
          <Image style="img" sorce={gmail} alter="Not Found"/>
          <Typography sx={{color:'#3c3c3c', marginLeft:'10px', fontWeight:'500'}} variant="h6" component="div">
            Gmail
          </Typography>
        </Toolbar>
      </AppBar>
    </Box></>
  )
}

export default Navbar