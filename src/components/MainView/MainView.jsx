import Box from '@mui/material/Box';
import * as React from 'react';
import { IconButton, Slide, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTheme } from '@mui/material/styles';
import { Link  as Scroll } from 'react-scroll'


export const MainView = () => {
    const theme = useTheme();

    const [checked, setChecked] = React.useState(true);
    
    React.useEffect(() => {

    }, [checked])
    return (
        <Box className="container" id='header' >
            <Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})}  >
                <Typography className="jujuytypo" variant="h1" md={8} sx={{ 
                        flexDirection:'column',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Nunito Sans',
                        fontSize: '16rem',
                        fontWeight: '400',
                        
                        [theme.breakpoints.down("md")]:{
                            fontSize: '6rem'
                        }}}>
                        JUJUY

                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <KeyboardDoubleArrowDownIcon className="menutypo" sx={{ fontSize: '4rem',margin:'0 auto',color:'#000'}}/>
                            </IconButton>
                        </Scroll>
                </Typography>
            </Slide>
        </Box>
    )
}
