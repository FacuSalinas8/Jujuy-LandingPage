import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import places from './places';
import { GridItem } from './GridItem';
import useWindowPosition from '../../hooks/useWindowPosition';

export const PlacesGrid = () => {

    const checked = useWindowPosition('header');


return (
    <Box sx={{ flexGrow: 1}}>
        <Grid container elevation={10}
            spacing={{ xs: 2, md: 8 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                {Array.from(Array(places.length)).map((_, index) => (
                    <Grid item xs={1} sm={4} md={6} key={index}>
                        <GridItem places={places[index]} checked={checked}/>
                    </Grid>
                ))}
        </Grid>
    </Box>
);
}


