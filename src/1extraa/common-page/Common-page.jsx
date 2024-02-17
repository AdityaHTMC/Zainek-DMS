import React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../pages/MainScreen';
import About from '../About/About';


const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/****** top bar part start *******/}
      <Header open={open} setOpen={setOpen}/>
      {/******* top bar part end *******/}

      {/******* sidebar part start *******/}
      <SideBar open={open} setOpen={setOpen}/>
      {/******* sidebar part end *******/}

      {/******* body part start *******/}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route exact path='/' element={<MainScreen />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Box>
      {/******* body part end *******/}

    </Box>
  );
}
