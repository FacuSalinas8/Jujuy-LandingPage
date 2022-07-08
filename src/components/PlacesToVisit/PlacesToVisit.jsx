import { Box } from '@mui/material'
import { PlacesGrid } from './PlacesGrid'


export const PlacesToVisit = () => {
    return (
        <Box id="place-to-visit"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{minHeight:'100vh'}}>
            
            <PlacesGrid/>
        
        </Box>
    )
}
