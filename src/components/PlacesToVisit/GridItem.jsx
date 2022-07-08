import { Grow, Link, Paper, Typography } from '@mui/material'
import { experimentalStyled as styled,useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import '../../index.css'


export const GridItem = ({places,checked}) => {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: theme.spacing(5),
        minHeight:'12rem',
        width:'85%',
        textAlign: 'center',
        color: 'transparent',
        fontFamily: 'Nunito Sans',
        fontWeight: 'light',
        fontSize:'1.5rem',
        transition: 'all 300ms ease-out',


        // position: 'relative',
        ':hover':{
            cursor: 'pointer',
            letterSpacing: '10px',
            // textTransform: 'uppercase',
            background: 'rgb(0,0,0)',
            // filter:'blur(2px)',
            transform: 'scale(1.1)',
            transition: 'all 300ms ease-out'}
        
        }));

    const theme = useTheme();
    const [urlPage, seturlPage] = useState('');
    

    return (
        <Grow in={checked}{...(checked ? { timeout: 1000 } : {})}>
            <Link rel="noopener" target="_blank" href={urlPage} 
                sx={{textDecoration:'none'}}
                onClick={()=>seturlPage(places.url)}>
                                

                    <Item className='itemImg' elevation={24} 
                        sx={{marginTop:5,mx:5,backgroundImage:`url(${places.imgPath})`,
                        [theme.breakpoints.down("lg")]:{
                            color:'#fff',
                            textTransform:'uppercase',
                            width:'75%',
                            margin:'0 auto'
                        }
                        }}>
                            {(places.label)}
                        
                    </Item>
                            
            </Link>
        </Grow>
    )
}
