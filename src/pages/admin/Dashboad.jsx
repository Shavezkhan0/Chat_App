import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Paper, Stack, Box, Typography, IconButton } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon, Search as SearchIcon } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/styles/StyleComponents'
import { matblack } from '../../constants/color'
import { DoughnutChart, LineChart } from '../../components/specific/Charts'

const Dashboad = () => {

  //1 Appbar
  const AppBar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem", margin: "2rem 0", borderRadius: "1rem",
      }}>

      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "2rem" }} />

        <SearchField placeholder='Search' />
        <CurveButton >
          <IconButton style={{ color: 'white' }}>
            <SearchIcon />
            <span style={{ color: 'white', fontSize: "1rem" }}>Search</span>
          </IconButton>
        </CurveButton>

        <button>khan</button>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}>
          {moment().format("dddd,D MMMM YYYY")}
        </Typography>

        <NotificationsIcon />
      </Stack>

    </Paper>
  );

  //2 > Widgets
  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"1rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"1rem 0"}
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={3} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={36} Icon={<MessageIcon />} />
    </Stack>
  )

  return (
    <AdminLayout>
      <Container component={"main"}>

        {AppBar}


        <Stack direction={{
          xs: "column",
          lg: "row"
        }} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}
          sx={{
            gap: '0.2rem'
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography margin={"1rem 0"} variant='h5' >Last Messages</Typography>

            {/* //chats */}
            <LineChart value={[1, 2, 3, 2, 4, 1, 3]} />

          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "15rem",
              height: "15rem",
            }}
          >

            {/* {" Dougnut Chart"} */}
            <DoughnutChart labels={["single Chats", "Group Chats"]} value={[23, 66]} />

            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.2rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon />  <Typography>Vs</Typography> <PersonIcon />
            </Stack>
          </Paper>
        </Stack>


        {Widgets}
      </Container>
    </AdminLayout>
  )
}


const Widget = ({ title, value, Icon }) => (
  <Paper elevation={6}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1rem",
      width: "15rem",
    }}>
    <Stack alignItems={"center"} spacing={"0.5rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: `5px solid ${matblack}`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >{value}</Typography>
      <Stack direction={"row"} spacing={"0.5rem"} alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
)

export default Dashboad