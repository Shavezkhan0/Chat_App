import React from 'react'
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../specific/ChatList';
import { sampleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = () => (WrappedComponent) => {
    return (props) => {

        const handelDeleteChat=(e,_id,groupChat)=>{
            e.preventDefault();
            console.log("Delete chat",_id,groupChat);
        }

        const params =useParams();
        const chatId=params.chatId;

        return (
            <>

                <Title />
                <Header />


                <Grid container height={"calc(100vh-4rem)"}>

                    <Grid
                        item
                        sm={4}
                        md={3}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        height={"100%"}
                    >
                        <ChatList chats={sampleChats} chatId={chatId} handelDeleteChat={handelDeleteChat}
                            onlineUsers={["1","2"]}
                        />
                    </Grid>

                    <Grid item xs={12} sm={8} md={5} lg={6} height={"89vh"} >
                        <WrappedComponent {...props} />


                    </Grid>
                    <Grid item md={4} lg={3} height={"89.4vh"}
                        sx={{
                            display: { xs: "none", sm: "block" },
                            padding:"2rem",
                            bgcolor:"rgba(0,0,0,0.3)",
                        }}
                    >
                        <Profile/>
                    </Grid>



                </Grid>



            </>
        );
    };
};

export default AppLayout