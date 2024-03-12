import React from 'react'
import {Button,Typography,Box} from "@mui/material";
import {Link} from "react-router-dom";
import bs3 from './bs3.jpg';
const Home = () => {
  return (
    <div className="home-container" style={{ 
      backgroundImage: `url(${bs3})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100vh', // Adjust the height as needed
    }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button  LinkComponent={Link} to="/books" sx={{marginTop:15,background:'orangered'}} variant="contained">
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home