import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { MainView } from '../MainView/MainView';
import { List, ListItemButton, ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';


const navItems = ['Home', 'About', 'Contact'];

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
    }

    HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
    };

    export default function HideAppBar(props) {
    return (
        <React.Fragment>
        <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{background:'rgba(0,0,0,0.5)', alignItems:'center'}} elevation={2}>
                <Toolbar >
                    <List sx={{display:'flex', color:'#fff',gap:1}}>
                        {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton 
                                sx={{ 
                                textAlign: 'center',
                                fontFamily:'Nunito Sans',
                                ':hover':{
                                    background:'none',
                                    color:'#4cc9f0',
                                    transition: 'all 300ms ease-out'
                                }
                                }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Toolbar>
                </AppBar>
            </HideOnScroll>

            <Toolbar />
            <Container>
                <MainView/>
            </Container>
        </React.Fragment>
    );
}
