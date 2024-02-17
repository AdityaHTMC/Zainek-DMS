import React from "react";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import StyleIcon from '@mui/icons-material/Style';
import DvrIcon from '@mui/icons-material/Dvr';

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        key: "/",
    },
    {
        title: "Sales Order",
        icon: <DvrIcon />,
        key: "/salesOrder",
    },
    {
        title: "Secoundary Sales",
        icon: <BookOutlinedIcon />,
        key: "/secondarySales",
    },
    {
        title: "Sales Return",
        icon: <CalendarMonthOutlinedIcon />,
        key: "/slaesReturn",
    },
    {
        title: "Item Report",
        icon: <HandshakeOutlinedIcon />,
        key: "/itemReport",
    },
    {
        title: "Dealer Ledger",
        icon: <TroubleshootOutlinedIcon />,
        key: "/dealerLedger",
    },
    {
        title: "Sec Sales Report",
        icon: <StyleIcon />,
        key: "/salesReport",
    },
    
]