import React, { memo } from 'react'
import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { SampleNotifications } from '../../constants/sampleData'

const Notifications = () => {

  const friendRequestHandler = ({ _id, accept }) => {

  }

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>

        {
          SampleNotifications.length > 0 ? (

            SampleNotifications.map((sender, _id) => <NotificationItem sender={sender} _id={_id} handler={friendRequestHandler} key={_id} />)

          ) : (<Typography textAlign={"center"} fontSize={"12px"}>No Notifications</Typography>)
        }


      </Stack>

    </Dialog>
  )
};

const NotificationItem = memo(({ sender, _id, handler }) => {

  const { name, avatar } = sender;

  return (
    <ListItem >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}>

        <Avatar src={avatar} />

        <Tooltip title={`${name} sent you a friend request`}>
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
              fontSize: '13px',
            }}>
            {`${name} sent you a friend request`}
          </Typography>
        </Tooltip>

          <Stack spacing={"0.2rem"} direction={{
            xs:"column",
            sm:"row"
          }}>
            <Button onClick={()=>handler({_id,accept:true})} variant="outlined" size='small'>Accept</Button>
            <Button color='error' onClick={()=>handler({_id,accept:false})} variant="outlined" size='small'>Reject</Button>
          </Stack>

      </Stack>
    </ListItem>
  )
})

export default Notifications
