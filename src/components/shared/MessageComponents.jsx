import { Typography, Box } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react'
import { fileFormat } from '../../lib/feature';
import RenderAttachment from './RenderAttachment';

const MessageComponents = ({ message, user }) => {

  const { sender, content, attachments = [], createdAt } = message;

  const sameSander = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSander ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
        padding: "0.2rem",
        width: "fit-content",
      }}>

      {
        !sameSander && <Typography color={"orange"} fontWeight={"500"} variant='caption'>{sender.name} </Typography>
      }

      {
        content && <Typography>{content}</Typography>
      }

      {
        attachments.length > 0 && attachments.map((attachment, index) => {

          const url = attachment.url;
          const file = fileFormat(url);

          return <Box>
            <a href={url} target='_blank' download style={{
              color: "black",
            }}>
              {RenderAttachment(file, url)}
            </a>
          </Box>

        })
      }

      <Typography variant='caption' color={"text.secondary"} >{timeAgo}</Typography>

    </div>
  )
}

export default memo(MessageComponents)