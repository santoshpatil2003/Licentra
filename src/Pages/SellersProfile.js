import {React, useState, useEffect} from 'react'
import { Box, Grid, Typography } from '@mui/joy';
import './SellersProfile.css'
import SellerProfileSection from '../Components/SellerProfileSection';
import MusicCard from '../Components/MusicCard';
import { getSeller, getSongDataSellerAll } from '../Backend/Data';



function SellersProfile({uid, b_uid}) {
    const [MusicList, MusicListf] = useState([])
    const [ProfileData, ProfileDataf] = useState({})


    useEffect(()=>{
        async function FetchData(){
            let SellerData = await getSeller(uid)
            let MusicDataList = await getSongDataSellerAll(uid)
            MusicListf(MusicDataList.songs)
            ProfileDataf(SellerData.data)
        }

        FetchData()
    },[uid])



    return (
        <Box width={'75%'} bgcolor={'#070C12'} sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}, position: 'absolute',top: '11%'}} display={'flex'} flexDirection={'column'} height={'88%'} maxHeight={'88%'} zIndex={2} flexBasis={"80%"}>
           
            <SellerProfileSection name={ProfileData.name} user_name={ProfileData.user_name} Record={MusicList.length}></SellerProfileSection>
            
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
                            
                            <MusicCard b_uid={b_uid} uid={uid} data={data}></MusicCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>}
            
        </Box>
    )
}

export default SellersProfile
