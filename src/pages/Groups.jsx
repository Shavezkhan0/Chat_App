import React, { memo, useState, useEffect, lazy, Suspense } from 'react'
import { Backdrop, Button, ButtonGroup, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { matblack, orange } from '../constants/color'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CustomLink } from '../components/styles/StyleComponents'
import { SampleUsers, sampleChats } from '../constants/sampleData'
import AvatarCard from '../components/shared/AvatarCard'
import UserItem from '../components/shared/UserItem'

const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(() => import("../components/dialogs/AddMemberDialog"))

const isAddMember = false;

const Groups = () => {

  const chatId = useSearchParams()[0].get("group");

  const navigate = useNavigate()

  const [isMobileOpen, setisMobileOpen] = useState(false);

  const handleMobile = (prev) => {
    setisMobileOpen((prev) => !prev);
  }

  const handleMobileClose = () => setisMobileOpen(false);

  const navigateBack = () => {
    navigate("/")
  };

  const IconBtns = <>


    <IconButton
      sx={{
        display: {
          xs: "block",
          sm: "none",
          position: "fixed",
          right: "1rem",
          top: "2rem",
        }
      }}
      onClick={handleMobile}
    >
      <MenuIcon />
    </IconButton>



    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute",
        top: "2rem",
        left: "2rem",
        bgcolor: matblack,
        color: "white",
        "&:hover": {
          color: "black",
        }
      }}
        onClick={navigateBack}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>


  //Group details



  const [isEdit, setisEdit] = useState(false)
  const [groupName, setgroupName] = useState("")
  const [groupNameUpdated, setgroupNameUpdated] = useState("")
  const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false)

  const updateGroupName = () => {
    setisEdit(false)
    console.log(groupNameUpdated)
  }

  const openConfirmDeleteHandler = () => {
    setconfirmDeleteDialog(true)
    console.log("Delete Group")
  }

  const closeConfirmDeleteHandler = () => {
    setconfirmDeleteDialog(false)
  }

  const openAddMemberHandler = () => {
    console.log("Add Member to Group")
  }

  const deleteHandler = () => {
    console.log("Delete Handler")
    closeConfirmDeleteHandler();
  }

  const removeMemberHandler = (id) => {
    console.log("Remover", id)
  }

  useEffect(() => {
    if (chatId) {
      setgroupName(`Group Name ${chatId}`)
      setgroupNameUpdated(`Group Name ${chatId}`)
    }

    return () => {
      setgroupName("")
      setgroupNameUpdated("")
      setisEdit(false)
    }
  }, [chatId])


  const GroupName = <>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"}>
      {
        isEdit ? <>
          <TextField value={groupNameUpdated} onChange={e => setgroupName(e.target.value)} />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </> :
          <>
            <Typography variant='h5' >{groupName}</Typography>
            <IconButton size='small' onClick={() => setisEdit(true)}> <EditIcon /> </IconButton>
          </>
      }
    </Stack>
  </>


  //button group

  const ButtonGroup = <>
    <Stack
      direction={{
        sx: "column",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >

      <Button size='small' color='error' variant='outlined' startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >Delete Group</Button>
      <Button size='small' variant='contained' startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >Add Member</Button>

    </Stack>
  </>

  return (
    <Grid container height={"100vh"}>

      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
            overflowY: 'auto',
          },
        }}
        sm={3}

      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>

      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "0.5rem 1.5rem",
        // overflow: 'auto',
      }}
      >

        {IconBtns}

        {groupName &&
          <>
            {GroupName}

            <Typography
              margin={"0.5rem"}
              alignSelf={"flex-start"}
              variant='body1'
            >
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                sx: "0",
                md: "0.5rem 0.5rem"
              }}
              spacing={"1rem"}
              height={"50vh"}
              overflow={"auto"}
            >

              {/* //members */}

              {
                SampleUsers.map((i) => (
                  <UserItem key={i._id} user={i} isAdded styling={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "0.5rem",
                  }}
                    handler={removeMemberHandler}
                  />
                ))
              }

            </Stack>

            {ButtonGroup}
          </>
        }

      </Grid>

      {
        isAddMember && <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog />
        </Suspense>
      }

      {
        confirmDeleteDialog && <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      }


      <Drawer sx={{
        display: {
          xs: "block",
          sm: "none",
        }
      }} open={isMobileOpen} onClose={handleMobileClose}>
        <GroupList w='50vw' myGroups={sampleChats} chatId={chatId} />
      </Drawer>


    </Grid>
  )
}


const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <div style={{ height: '100vh', overflow: 'auto' }}>
    <Stack width={w} sx={{
      backgroundColor: "orange",
      overflow: "auto",
      height:"100%",
    }}>
      {
        myGroups.length > 0 ? (
          myGroups.map((group) => <GroupListItem group={group} chatId={chatId} key={group._id} />)
        ) : (
          <Typography textAlign={"center"} padding={"1rem"}>
            No groups
          </Typography>)
      }
    </Stack>
  </div>
)

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <CustomLink to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id)
          e.preventDefault()

      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} >
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </CustomLink>
  );
});

export default Groups
