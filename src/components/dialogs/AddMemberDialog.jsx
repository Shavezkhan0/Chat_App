import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import { SampleUsers } from "../../constants/sampleData";
import UserItem from '../shared/UserItem';
import { useState } from 'react';




const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    // const []=useState

    const [members, setmembers] = useState(SampleUsers)
    const [selectedMembers, setselectedMembers] = useState([])

    const selectMemberHandler = (id) => {
  
      setselectedMembers((prev) =>
        prev.includes(id) ? prev.filter((currentElement) => currentElement !== id)
          : [...prev, id])
    }


   

    const addMenberSubmitHandler = () => {
        closeHandler();
    }

    const closeHandler = () => {
        setselectedMembers([])
        setmembers([])
    }



    return (
        <Dialog open onClose={closeHandler}>
            <Stack>
                <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

                <Stack>
                    {
                        members.length > 0 ? members.map(i => (
                            <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
                        )) :
                            <Typography textAlign={"center"} >No Friends</Typography>
                    }
                </Stack>
            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"} padding={"1rem"} spacing={"0.5rem"}>
                <Button onClick={closeHandler} color='error' variant='outlined' >Cancel</Button>
                <Button onClick={addMenberSubmitHandler} variant='contained' disabled={isLoadingAddMember} >Submit Changes </Button>
            </Stack>

        </Dialog>
    )
}

export default AddMemberDialog