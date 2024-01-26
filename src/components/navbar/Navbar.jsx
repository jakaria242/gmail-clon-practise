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
import { Avatar, Grid } from '@mui/material';
import Search from '../../assets/images/search.png'
import '../../utils/image.css'
import {auth} from '../../config/FirebaseConfig.jsx'

const Navbar = () => {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
       <AppBar elevation={0} position="static" sx={{backgroundColor:'#f9f9f9', height:"5vw", paddingTop:"7px"}}>
       <Toolbar variant="dense">
        <Grid item xs={2}>
          <div style={{display:'flex', alignItems:'center'}}>
           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color:'#3c3c3c' }}>
            <MenuIcon/>
           </IconButton>
           <Image style="img" sorce={gmail} alter="Not Found"/>
           <Typography sx={{color:'#3c3c3c', marginLeft:'10px', fontWeight:'500'}} variant="h6" component="div">Gmail</Typography>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div style={{borderRadius:"40px", backgroundColor:'#E4EFFA', display:"flex", alignItems:"center", width:"60vw", height:"3.7vw"}}>
          <Image style="search" sorce={Search} alter="Not Found"/>
          <input placeholder='Search mail' style={{width:'55vw', height:'3vw', backgroundColor:'#E4EFFA',border:'none',}}/>
          </div>
        </Grid>
        <Grid item xs={1}>
        <Avatar sx={{marginLeft:"70px"}} src={auth.currentUser?.photoURL}/>
        </Grid>
        </Toolbar>
      </AppBar>
      </Box>
    </Grid>
  )
}

export default Navbar