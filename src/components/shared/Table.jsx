import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Paper ,Container} from '@mui/material'
import { matblack } from '../../constants/color';

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
    return (
        <Container
            sx={{
                height: "100vh",
                
            }}
        >


            <Paper 
            elevation={3}
            sx={{
                padding:"1rem 4rem",
                borderRadius:"1rem",
                margin:"auto",
                width:"100%",
                overflow:"hidden",
                height:"100%",
                boxShadow:"none",
                
            }}
            >
                <Typography
                    textAlign={"center"}
                    varient={"h4"}
                    sx={{
                        margin: "1rem",
                        textTransform: "uppercase"
                    }}
                >
                    {heading}
                </Typography>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={rowHeight}
                    style={{
                        height: "80vh"
                    }}
                    sx={{
                        border:"none",
                        ".table-header":{
                            bgcolor:matblack,
                            color:'white'
                        }
                    }}
                >

                </DataGrid>
            </Paper>

        </Container>
    )
}

export default Table