import { styled } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'; // Rename Link to RouterLink
import { grayColor, matblack } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
});

export const CustomLink = styled(RouterLink)` // Rename Link to CustomLink
    text-decoration: none; // Removed quotes around none
    color: black;
    padding: 1rem;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

export const InputBox=styled("input")`
width:100%;
height:none;
outline:none;
padding: 0 3rem;
border-radius: 1.5rem;
background-color:${grayColor}
`

export const SearchField=styled("input")`
padding:0.5rem 1rem;
width:20vmax;
border:none;
outline:none;
border-radius:1.5rem;
background-color:${grayColor};
font-size:1.1rem;
`

export const CurveButton=styled("button")`
border-radius:1.5rem;
padding:0.01rem 0.2rem;
border:none;
outline:none;
cursor:pointer;
background-color:${matblack};
color:white;
font-size:0.5rem;
&:hover{
    background-color:rgba(0,0,0,0.8);
}
`