import { useInputValidation } from '6pp'
import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'
 
const isAdmin=true;


const AdminLogin = () => {

    const secretKey=useInputValidation("")

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Submit");
    }


    if(isAdmin) return <Navigate to='/admin/dashboard' />

  return (
    <div style={{
        backgroundColor:
        " #e1b382",
        padding:"1rem"
        
     }}
     
     >
     <Container component={"main"} maxWidth="xs"
       sx={{
         minHeight: "94.7vh",
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
          
           <Typography variant='h5'>Admin Login</Typography>
           <form  style={{
             width: "100%",
             marginTop: "2px"
           }}
           onSubmit={submitHandler}
           >
 
 
             <TextField
               required
               fullWidth
               label="Secret Key"
               type='password'
               margin='normal'
               variant='outlined'
               size='small'
               value={secretKey.value}
               onChange={secretKey.changeHandler}
             />
 
             <Button
               sx={{
                 marginTop: "2px"
               }}
               variant='contained' color='primary' type='submit' fullWidth>
               Login
             </Button>
 
            
             
 
           </form>
         
       </Paper>
     </Container>
     </div>
  )
}

export default AdminLogin