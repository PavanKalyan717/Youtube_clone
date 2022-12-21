import { useState, useEffect } from "react"
import {Box, Typography, Stack} from '@mui/material'
import SideBar from "./SideBar"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  console.log('vd',videos)

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=> setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } , backgroundColor:'white' }}>
      <Box  sx={{backgroundColor:'white', height: { xs: "auto", md: "92vh" }, 
      borderRight: "1px solid #3d3d3d", px: { xs: 0, md: 2 },
      // width:{md:'13%'}  
      }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography className="copyright" variant="body2"  sx={{ mt: 1.5, color: "black", fontWeight:'bold' }}>
            Pavan @ YouTube
        </Typography>
      </Box>
      <Box  p={2}  
      // ml={2} mr={2}
      sx={{backgroundColor:'white', overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span style={{ color: "#c60009" }}>videos </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
      
    </Stack>
  )
}

export default Feed