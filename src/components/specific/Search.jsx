import { Dialog, DialogTitle, InputAdornment, List,  Stack, TextField } from '@mui/material'
import React from 'react'
import {useInputValidation} from '6pp'
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from '../shared/UserItem';
import { SampleUsers } from '../../constants/sampleData';
import { useState } from 'react';



const Search = () => {

  const search=useInputValidation("")

  let isLodingSendFriendRequest=false;

  // const [users,setUsers]=useState([1,2,3,4])
  const [users,setusers]=useState(SampleUsers)

  const addFriendHandler=(id)=>{
    console.log(id);
  }

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField 
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          inputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
           />

           <List>
            {
              users.map((i)=>(
                <UserItem 
                  user={i}
                  key={i._id}
                  handler={addFriendHandler}
                  handlerIsLoding={isLodingSendFriendRequest}
                />

              ))
            }
           </List>

      </Stack>
    </Dialog>
  )
}

export default Search
