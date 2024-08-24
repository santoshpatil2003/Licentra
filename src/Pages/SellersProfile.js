import {React, useState, useEffect} from 'react'
// import SideBar from '../Components/SideBar'
// import Main from '../Components/Main'
import { Box, Grid, IconButton, Typography } from '@mui/joy';
// import MusicCard from '../Components/MusicCard';
import {DeleteIcon, SearchRounded} from '@mui/icons-material';
import './SellersProfile.css'
// import images from './images.jpeg'
import SellerProfileSection from '../Components/SellerProfileSection';
import MusicCardShow from '../Components/MusicCardShow'
import image from '../Components/images.jpeg'
import MusicCard from '../Components/MusicCard';
import { getSeller, getSongDataSellerAll } from '../Backend/Data';



function SellersProfile({uid}) {
    const [MusicList, MusicListf] = useState([])
    const [ProfileData, ProfileDataf] = useState({})


    async function FetchData(){
        let SellerData = await getSeller(uid)
        let MusicDataList = await getSongDataSellerAll(uid)
        MusicListf(MusicDataList.songs)
        ProfileDataf(SellerData.data)
        console.log(SellerData.data)
        console.log(MusicDataList.songs)
        console.log(uid)
    }

    useEffect(()=>{
        FetchData()
    },[])



    return (
        <Box width={'74%'} bgcolor={'black'} sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}, position: 'absolute',top: '11%'}} display={'flex'} flexDirection={'column'} height={'88%'} maxHeight={'88%'} zIndex={2} flexBasis={"80%"}>
            {/* <Box height={'12%'} minHeight={'12%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box bgcolor={'#13121D'} flexBasis={'65%'} borderRadius={100} height={'60%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
                    <input placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }} />
                    <Box marginRight={'1%'}><IconButton aria-label="Search" sx={{'&:hover': {backgroundColor: 'transparent', color: 'gray'}}} ><SearchRounded></SearchRounded></IconButton></Box>
                </Box>
            </Box> */}
            <SellerProfileSection name={ProfileData.name} user_name={ProfileData.user_name} Record={MusicList.length}></SellerProfileSection>
            {/* <div className="custom-scrollbar"> */}
            { MusicList.length === 0? <Box height={'70%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
                <Box height={'fit-content'} width={'fit-content'} color={'white'}>
                    <Typography fontSize={'100%'} fontWeight={'bold'} >No Records</Typography>
                </Box>
            </Box>:<Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} >
                <Box height={'10%'} width={'94%'} color={'white'}>
                    <Typography fontSize={'120%'} fontWeight={'bold'} >Records</Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} paddingLeft={'2%'} paddingTop={'1%'}>
                    {Array.from(MusicList).map((data, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            {/* data={{song_name: 'Way down We Go', song_by: 'Santosh Patil', song_price: '120', song_pic_url: image}} */}
                            {/* data={{song_name: data.song_name, song_by: data.song_by, song_price: data.song_price, song_pic_url: data.song_pic_url}} */}
                            <MusicCard data={{song_name: data.song_name, song_by: data.song_by, song_price: data.song_price, song_pic_url: data.song_pic_url}}></MusicCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>}
            {/* </div> */}
        </Box>
    )
}

export default SellersProfile
