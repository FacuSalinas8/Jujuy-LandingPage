import React from 'react'
import { createTheme } from "@mui/material";
import { green, lightBlue, red } from "@mui/material/colors";

export const colorTheme = createTheme({

    palette: {
        primary: {
            main:'#5AFF3D'
        },
        secondary: {
            main:'#455a64'
        },
        error: {
            main: red.A400
        }
    }
})
