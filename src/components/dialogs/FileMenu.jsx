import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorE1}) => {
  return (
    <Menu open={false}  anchorEl={anchorE1}>
       <div 
        style={{
            width:"10rem"
        }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum omnis, quasi reiciendis earum culpa ducimus nihil voluptates autem quaerat voluptas beatae illum eos nostrum blanditiis adipisci. Doloribus, aperiam mollitia.
       </div>
    </Menu>

  )
}

export default FileMenu