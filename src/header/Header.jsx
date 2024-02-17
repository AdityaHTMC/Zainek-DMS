import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import UserPic from'../images/user.jpg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Header = ({open,setOpen}) => {
    const theme = useTheme();  
    const handleDrawerOpen = () => {
      setOpen(true);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {setAnchorElUser(event.currentTarget);};
  const handleCloseUserMenu = () => { setAnchorElUser(null); };
    
    return (
        <>
        <AppBar position="fixed" color="primary" open={open}>
        <Toolbar>         
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{marginRight:5,...(open && { display: 'none' }),}}
          >
          <MenuIcon />
          </IconButton>          
          {/* titel box start */} 
          <Typography className='width100' variant="h6" noWrap component="div">Zainek DMS</Typography>
          {/* titel box end */}
          
          {/* user drop box start */}
          <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} className='userDrop'  sx={{ p: 0 }}>
                <img src={UserPic} alt="" />
            </IconButton>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{vertical:'top',horizontal:'right',}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                <Link to="/MyProfile"><MenuItem className='profileDropItem' onClick={handleCloseUserMenu}><AccountCircleOutlinedIcon /> My Profile</MenuItem></Link>
                <Link to="/login"><MenuItem className='profileDropItem' onClick={handleCloseUserMenu}><PowerSettingsNewIcon color="error" /> Logout</MenuItem></Link>
            </Menu>
          </Box>
          {/* user drop box end */}
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Header
