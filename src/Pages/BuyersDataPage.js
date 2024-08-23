import React from 'react'
// import SideBar from '../Components/SideBar'
// import Main from '../Components/Main'
import { Box, Grid, IconButton, Typography } from '@mui/joy';
// import MusicCard from '../Components/MusicCard';
import {DeleteIcon, SearchRounded} from '@mui/icons-material';
import './SellersProfile.css'
// import images from './images.jpeg'
import SellerProfileSection from '../Components/SellerProfileSection';
import MusicCardShow from '../Components/MusicCardShow'
import BuyerData from '../Components/BuyerData';


function BuyersDataPage() {
    return (
        <Box sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
            <Box height={'12%'} minHeight={'12%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box bgcolor={'#13121D'} flexBasis={'65%'} borderRadius={100} height={'60%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
                    {/* <Input placeholder="Type in here…" variant="outlined" size='lg' fullWidth/> */}
                    <input placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }} />
                    <Box marginRight={'1%'}><IconButton aria-label="Search" sx={{'&:hover': {backgroundColor: 'transparent', color: 'gray'}}} ><SearchRounded></SearchRounded></IconButton></Box>
                </Box>
            </Box>
            {/* <SellerProfileSection></SellerProfileSection> */}
            {/* <div className="custom-scrollbar"> */}
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} >
                {/* <Box height={'10%'} width={'94%'} color={'white'}>
                    <Typography fontSize={'120%'} fontWeight={'bold'} >Records</Typography>
                </Box> */}
                <Grid container height={'auto'} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} padding={'1%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    {Array.from(Array(10)).map((_, index) => (
                        // <Grid bgcolor={'blue'} height={'100%'} key={index} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        //     {/* <MusicCard /> */}
                        //     {/* <MusicCardShow></MusicCardShow> */}
                        //     <BuyerData></BuyerData>
                        //     {/* <BuyerData></BuyerData> */}
                        // </Grid>
                        <BuyerData></BuyerData>
                    ))}
                </Grid>
            </Box>
            {/* </div> */}
        </Box>
    )
}

export default BuyersDataPage
