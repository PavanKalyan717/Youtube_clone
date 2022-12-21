import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {Box} from '@mui/material'
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  }, [id])
  

  return (
    <Box minHeight='95vh' sx={{backgroundColor:'white'}}>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(198,0,9,1) 72%, rgba(198,0,9,1) 100%)',
          zIndex:10,
          height:'300px',
         }}
         className='channellogo'
         >
         <img  src={channelDetail?.snippet?.thumbnails?.high?.url} alt='channelogo' style={{width:'50%', height:'100%'}}/>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        {/* <Box sx={{mr:{sm:'100px'}}} /> */}
          <Videos videos={videos}/>      
      </Box>
    </Box>
  )
}

export default ChannelDetail