//import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx';
import SideBar from './sidebar/SideBar.jsx';
import { CssBaseline } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MainScreen from './pages/MainScreen.jsx';
import Login from './login/Login.jsx';
import MyProfile from './my-profile/MyProfile.jsx';
import SalesOrder from  './booking/SalesOrder/SalesOrder.jsx';
import ViewSalesOrder from  './booking/SalesOrder/ViewSalesOrder.jsx';
import SecondarySales from './booking/SecondarySales/SecondarySales.jsx';
import ViewSecondarySales from './booking/SecondarySales/ViewSecondarySales.jsx';
import SalesReturn from './booking/SalesReturn.jsx';
import ItemReport from './booking/ItemReport.jsx';
import DealerLedger from './booking/DealerLedger.jsx';
import SalesReport from './booking/SalesReport.jsx';
import AddSales from './booking/SalesOrder/AddSales.jsx';
import AddSec from './booking/SecondarySales/AddSec.jsx';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const theme = useTheme();
  const location = useLocation()
  const isloginpage = location.pathname === '/login'
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
    <>
      {/* main wrapper start */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/****** top bar part start *******/}
        {
          !isloginpage ?
            <>
              <Header open={open} setOpen={setOpen} />

              <SideBar open={open} setOpen={setOpen} />
            </>
            :
            null
        }
        {/******* sidebar part end *******/}

        {/******* body part start *******/}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route exact path='/' element={<MainScreen />} />
            <Route path='/salesOrder' element={<SalesOrder/>} />
            <Route path='/ViewSalesOrder' element={<ViewSalesOrder/>} />
            <Route path='/slaesReturn' element={<SalesReturn />} />
            <Route path='/secondarySales' element={<SecondarySales />} />
            <Route path='/ViewSecondarySales' element={<ViewSecondarySales />} />
            <Route path='/itemReport' element={<ItemReport />} />
            <Route path='/dealerLedger' element={<DealerLedger/>} />
            <Route path='/salesReport' element={<SalesReport/>} />
            <Route path='/addSales' element={<AddSales/>} />
            <Route path='/addSec' element={<AddSec/>} />
            <Route path='/Login' element={<Login />} />
            <Route path='/MyProfile' element={<MyProfile />} />
          </Routes>
        </Box>
        {/******* body part end *******/}

      </Box>
      {/* main wrapper start */}
    </>
  );
}

export default App;
