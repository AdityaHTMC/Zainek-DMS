import React from 'react'
import './login.css'
import SimpleImageSlider from "react-simple-image-slider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import daignotics from "../images/daignotics.jpg";
import daignotics1 from "../images/doctor_consultation_03.jpg";
import doctor from "../images/pngimg.com - doctor_PNG16023.png";
import user from "../images/user.jpg"
import logo1 from '../images/logo1.jpg'

const images = [
  { url: daignotics },
  { url: doctor },
  { url: daignotics1 },
  { url: user },
];

const Login = () => {
 
  const navigate = useNavigate()
 
  const handleClick=()=>{
    navigate('/')
  }


  return (
    // login page work start //
    <Grid xs={12} className='cards' style={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
      {/* <div item container > */}

      {/* <SimpleImageSlider
          width={300}
          height={300}
          images={images}
          // showBullets={true}
          // showNavs={true}
          autoPlay={true}
        /> */}

      {/* </div>
      <div> */}
      <div className=''><img src={logo1} width="400" alt="" /></div>
      <Card className='LoginCard'>
          <div className='mt20 mb10 ml12'><img src={logo1} width="150" alt="" /></div>
          <h2 className='header-text'>Welcome Back</h2>
          <p className='sub-header-text'>Please login to your account</p>
          <div className='mt12'>
            <TextField  className='width92 mb20 ml12' required label="Enter Username"  size="small"  />
            <TextField  className='width92 mb20 ml12' type="password" required label="Enter Password" size="small" />
            <Grid item container xs={12} justifyContent="center">
              <div className='login-btn' onClick={handleClick} >
                Login
              </div>
            </Grid>
          </div>
      </Card>
    </Grid>
    // login page work end //
  )
}
export default Login