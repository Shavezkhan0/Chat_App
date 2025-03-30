import { Height } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalenderIcon } from '@mui/icons-material'
import moment from 'moment'

const Profile = () => {
    return (
        <Stack spacing={"1rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 130,
                    height: 130,
                    objectFit: "contain",
                    marginBottom: "0.5rem",
                    border: "5px solid White"
                }}
            />
            <ProfileCard heading={"Bio"} text={"I am shavezz khan"} />
            <ProfileCard heading={"Username"} text={"@Shavezkhan0"} Icon={<UserNameIcon />} />
            <ProfileCard heading={"Name"} text={"I am  khan"} Icon={<FaceIcon />} />
            <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} Icon={<CalenderIcon />} />
        </Stack>
    )
}

const ProfileCard = ({ text, Icon, heading }) => <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
>

    {Icon && Icon}

    <Stack>
        <Typography color={"orange"} fontWeight={"500"} fontSize={"18px"} variant='caption'>{heading}</Typography>
        <Typography color={"black"} variant='body1'>{text}</Typography>
    </Stack>


</Stack>


export default Profile