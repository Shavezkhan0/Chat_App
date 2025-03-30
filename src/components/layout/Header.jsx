import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { orange } from '../../constants/color'
import React, { Suspense, lazy } from 'react'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LayoutLoader } from './Loaders';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";



const SearchDialog = lazy(() => import("../specific/Search"))
const NotificcationDialog = lazy(() => import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../specific/NewGroup"))

const Header = () => {

  const naivagate = useNavigate();

  const [ismobile, setmobile] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [isNewGroup, setNewGroup] = useState(false)
  const [isNotifications, setNotifications] = useState(false)

  const handelMobile = () => {
    setmobile((prev) => !prev)
    console.log("Mobile");
  }

  const openSearch = () => {
    setSearch((prev) => !prev);
    console.log("openSearchDialoge");
  }

  const openNewGroup = () => {
    setNewGroup((prev) => !prev);
    console.log("openNewGroup");
  }

  const openNotifications = () => {
    setNotifications((prev) => !prev);
    console.log("openNotifications");
  }

  const navigateToGroup = () => {
    naivagate("/groups")
  }

  const navigateToAdmin = () => {
    naivagate("/admin")
  }

  const logouthandler = () => {
    console.log("logouthandler");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>

        <AppBar position='static' sx={{
          bgcolor: orange
        }} >

          <Toolbar>

            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              Chattu
            </Typography>


            <Box
              sx={{
                display: { xs: "block", sm: "none" }
              }}
            >
              <IconButton color='inherit' onClick={handelMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <Box>

              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />



              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />



              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />



              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotifications}
              />

              <IconBtn
                title={"Admin Panel"}
                icon={<AdminPanelSettingsIcon />}
                onClick={navigateToAdmin}
              />


              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logouthandler}
              />



            </Box>

          </Toolbar>
        </AppBar>

      </Box>


      {
        isSearch && (
          <Suspense fallback={<Backdrop open />}>
            <SearchDialog />
          </Suspense>
        )
      }

      {
        isNotifications && (
          <Suspense fallback={<Backdrop open />}>
            <NotificcationDialog />
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open />}>
            <NewGroupDialog />
          </Suspense>
        )
      }



    </>
  )
}


const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}


export default Header
