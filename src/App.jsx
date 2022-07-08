import { CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system"

import HideAppBar from "./components/NavBar/HideAppBar";

import { PlacesToVisit } from "./components/PlacesToVisit/PlacesToVisit";
import portada from './images/Jujuy-paisajes/portada.jpg';

// import './index.css'

function App() {

  return (
    <Box  sx={{  
      backgroundImage: `url(${portada})`,minHeight:'100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      fontFamily: 'Nunito Sans',
      }}>
      
      <CssBaseline/>
      <HideAppBar/>
      <PlacesToVisit/>

    </Box>
  )
}

export default App
