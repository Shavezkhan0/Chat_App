import React from 'react'
import { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { Block, CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyleComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/Validators';



const Login = () => {

  const [isLogin, setisLogin] = useState(true);

  const toggleLogin = () => setisLogin((prev) => !prev)

  const name=useInputValidation("");
  const bio=useInputValidation("");
  const username=useInputValidation("",usernameValidator);
  const password=useStrongPassword("");

  const avatar=useFileHandler("single")

  const handleLogin=(e)=>{
    e.preventDefault();
  }

  const handleSignUp=(e)=>{
    e.preventDefault();
  }

  return (
    <div style={{
       backgroundColor:
       " #e1b382",
       padding:"1rem"
       
    }}
    
    >
    <Container component={"main"} maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        
      }}>
      <Paper
        elevation={5}
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: "column",
          alignItems: "center",
        }}>
        {isLogin ? (<>
          <Typography variant='h5'>Login</Typography>
          <form  style={{
            width: "100%",
            marginTop: "2px"
          }}
          onSubmit={handleLogin}
          >

            <TextField
              required
              fullWidth
              label="Username"
              margin='normal'
              variant='outlined'
              size='small'
              value={username.value}
              onChange={username.changeHandler}

            />

            <TextField
              required
              fullWidth
              label="Password"
              type='password'
              margin='normal'
              variant='outlined'
              size='small'
              value={password.value}
              onChange={password.changeHandler}
            />

            <Button
              sx={{
                marginTop: "2px"
              }}
              variant='contained' color='primary' type='submit' fullWidth>
              Login
            </Button>

            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
            <Button
              variant='text' fullWidth
              onClick={toggleLogin}
            >
              Sign Up
            </Button>

          </form>
        </>) : (
          <>
            <Typography variant='h5'>Sign up</Typography>
            <form style={{
              width: "100%",
              marginTop: "1rem"
            }}
            onSubmit={handleSignUp}
            >


              <Stack position={"relative"} width={'10rem'} margin={"auto"} display={'flex'} justifyContent={"center"} alignContent={"center"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />

              


                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color:"white",
                    bgcolor:"rgba(0,0,0,0.5)",
                    ":hover":{
                      bgcolor: "rgba(0,0,0,0.7)",
                    }
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type='file' onChange={avatar.changeHandler}/>
                  </>
                </IconButton>

              </Stack>

              {
                avatar.error && ( 
                  <Typography 
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error" 
                    variant='caption' >
                    {avatar.error}
                  </Typography>
                )
              }

              <TextField
                required
                fullWidth
                label="Name"
                margin='normal'
                variant='outlined'
                size='small'
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin='normal'
                variant='outlined'
                size='small'
                value={bio.value}
                onChange={bio.changeHandler}

              />
              <TextField
                required
                fullWidth
                label="Username"
                margin='normal'
                variant='outlined'
                size='small'
                value={username.value}
                onChange={username.changeHandler}
              />

              {
                username.error && ( 
                  <Typography color="error" variant='caption' >
                    {username.error}
                  </Typography>
                )
              }

              <TextField
                required
                fullWidth
                label="Password"
                type='password'
                margin='normal'
                variant='outlined'
                size='small'
                value={password.value}
                onChange={password.changeHandler}
              />

              {
                password.error && ( 
                  <Typography color="error" variant='caption' >
                    {password.error}
                  </Typography>
                )
              }

              <Button
                sx={{
                  marginTop: "1rem"
                }}
                variant='contained' color='primary' type='submit' fullWidth>
                Sign UP
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
              <Button
                variant='text' fullWidth
                onClick={() => setisLogin(true)}
              >
                Login
              </Button>

            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  )
}

export default Login