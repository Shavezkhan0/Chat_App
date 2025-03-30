import { React, useState } from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material'
import { SampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroup = () => {

  const [members, setmembers] = useState(SampleUsers)
  const [selectedMembers, setselectedMembers] = useState([])

  const groupName = useInputValidation("")

  const selectMemberHandler = (id) => {

    // setmembers(prev =>
    //   prev.map(user =>
    //     user._id===id ? { ...user, isAdded: !user.isAdded } : user
    //   ))

    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id])
  }

  const submitHendler = () => { }

  const closeHendler = () => { }


  return (
    <Dialog open onClose={closeHendler}>
      <Stack p={{ xs: "2rem", sm: "3rem" }} width={"25rem"} spacing={"0.3rem"}>
        <DialogTitle textAlign={"center"} variant='h5'>New Group</DialogTitle>

        <TextField value={groupName.value} onChange={groupName.changeHandler} label="Group Name" size='small' />

        <Typography variant='body1' >Members</Typography>

        <Stack>
          {
            members.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />

            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant='outlined' color='error' >
            Cancel
          </Button>
          <Button variant='contained' onClick={submitHendler}>
            Create
          </Button>
        </Stack>

      </Stack>

    </Dialog>
  )
}

export default NewGroup
