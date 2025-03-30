import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'

const ChatList = ({ w = "100%", chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            charId: "",
            count: 0,
        }
    ],
    handelDeleteChat,

}) => {
    return (
        <div style={{ height: '100vh-4rem', overflow: 'auto'}}>
            <Stack width={w}
                direction={"column"}
                // overflow={"auto"}
                height={"89.52vh"}
            >
                {
                    chats?.map((data, index) => {
                        const { avatar, _id, name, groupChat, members } = data;
                        const newMessageAlert = newMessagesAlert.find(
                            ({ chatId }) => chatId === _id
                        )
                        const isOnline = members?.some((member) => onlineUsers.includes(_id));
                        return <ChatItem
                            index={index}
                            newMessageAlert={newMessageAlert}
                            // newMessageAlert={"new messages"}
                            isOnline={isOnline}
                            avatar={avatar}
                            name={name}
                            _id={_id}
                            key={_id}
                            groupChat={groupChat}
                            sameSender={chatId === _id}
                            handleDeleteChat={handelDeleteChat}
                        />; // Added key prop
                    })
                }
            </Stack>
        </div>
    )
}

export default ChatList
