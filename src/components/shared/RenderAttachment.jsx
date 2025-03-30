import React from 'react'
import { transformImage } from '../../lib/feature';
import { FileOpen as FileOpenIcon} from '@mui/icons-material';

const RenderAttachment = (file, url) => {

    switch (file) {
        case "video":
            return <video src={url} preload='none' width={"200px"} controls />


        case "image":
            return <img
                src={transformImage(url, 200)}
                width={"100px"}
                height={"100px"}
                style={{
                    objectFit: "contain",
                }}
                alt='Attachment' />


        case "audio":
            return <audio src={url} preload='none' controls />


        default:
            return <FileOpenIcon />
    }


}

export default RenderAttachment