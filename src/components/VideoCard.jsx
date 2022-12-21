import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "300px", }, minWidth:{xs:'358px'} ,boxShadow: "none", borderRadius:'15px' }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url } alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 160, }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#dee0df", height: '65px', borderRadius:' 0 0 15px 15px' }}>
      <Link to={`/video/${videoId}`} >
        <Typography variant="subtitle1" fontWeight="medium" color="#0F0F0F">
          {snippet?.title.slice(0, 60) }
        </Typography>
      </Link>
      <Link to={ `/channel/${snippet?.channelId}`} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle }
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard