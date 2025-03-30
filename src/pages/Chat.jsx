import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { grayColor } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyleComponents';
import { orange } from '@mui/material/colors';
import FileMenu from '../components/dialogs/FileMenu';
import { SampleMessage } from '../constants/sampleData';
import MessageComponents from '../components/shared/MessageComponents';

const user={
  _id:"dncsa;vavfs'bbdfbdf",
  name:"Shavez khan",
}

const Chat = () => {

  const containerRef = useRef(null);

  // const fileMenuRef=useRef(null)


  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",

        }}
      >

        {
          SampleMessage.map((i)=>(
            <MessageComponents key={i._id}  message={i} user={user} />
          ))
        }

      </Stack>

      <form style={{
        height: "10%"
      }}
      >

        <Stack
          direction={"row"}
          height={"100%"}
          padding={"0.5rem"}
          // alignItems={"center"}
          position={"relative"}

        >

          <IconButton
            sx={{
              position: "absolute",
              left: "1rem",
              rotate: "-30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox height={"90%"}  placeholder='Type Messages Here...' />

          <IconButton type='submit' sx={{
            rotate: "-25deg",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: orange,
            marginLeft: "0.5rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "orange",
              color: "white"
            }
          }}>
            <SendIcon />
          </IconButton>

        </Stack>




      </form>

      <FileMenu />

    </>
  )
}

export default AppLayout()(Chat);
