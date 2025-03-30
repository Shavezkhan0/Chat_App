import { Close as CloseIcon, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon, Groups as GroupsIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, Navigate } from "react-router-dom";
import { matblack, orange } from '../../constants/color';
import { CustomLink } from '../styles/StyleComponents';

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users",
        path: "/admin/users-management",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chats",
        path: "/admin/Chats-management",
        icon: <GroupsIcon />,
    },
    {
        name: "Messages",
        path: "/admin/Messages-management",
        icon: <MessageIcon />,
    },
]


const SideBar = ({ w = "100%" }) => {

    const location = useLocation();

    const logoutHandler = () => {
        console.log("Logout");
    }

    return (
        <Stack width={w} direction={"column"} spacing={"3rem"} padding={"3rem"}>
            <Typography variant="h5" textTransform={"uppercase"} color={orange} fontWeight={"600"} >
                Chattu
            </Typography>

            <Stack spacing={"0.5rem"}>

                {
                    adminTabs.map((tab) => (
                        <CustomLink key={tab.path} to={tab.path}
                            sx={
                                location.pathname === tab.path && {
                                    bgcolor: matblack,
                                    color: "white",
                                    ":hover": {
                                        color: orange,
                                        bgcolor: matblack,
                                    },

                                }
                            } >

                            <Stack direction={"row"} alignItems={"center"} spacing={"0.5rem"}>
                                {tab.icon}
                                <Typography >
                                    {tab.name}
                                </Typography>
                            </Stack>

                        </CustomLink>
                    ))
                }

                <CustomLink
                    onClick={logoutHandler}>

                    <Stack direction={"row"} alignItems={"center"} spacing={"0.5rem"}>
                        <ExitToAppIcon />
                        <Typography >
                            Logout
                        </Typography>
                    </Stack>

                </CustomLink>

            </Stack>
        </Stack>
    )
}

const isAdmin = true;

const AdminLayout = ({ children }) => {

    const [isMobile, setisMobile] = useState(false)

    const handleMobile = () => {
        setisMobile(!isMobile);
    }

    const handleClose = () => setisMobile(false);

    if (!isAdmin) return <Navigate to="/admin" />

    return (
        <Grid container minHeight={"100vh"} >

            {/* Menu */}
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem",
                }}>
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    }
                }}
            >
                
                <SideBar />
                
            </Grid>

            <Grid
                item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    bgcolor: '#f5f5f5',
                    overflow: "auto", 
                    height: "100%",
                }}
            >
                
                {children}
                
            </Grid>

            <Drawer open={isMobile} onClose={handleClose} >

                <SideBar w="50vw" />

            </Drawer>

        </Grid>
    )
}

export default AdminLayout