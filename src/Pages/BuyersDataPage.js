// import {React, useEffect, useState} from 'react'
// // import SideBar from '../Components/SideBar'
// // import Main from '../Components/Main'
// import { Box, Grid, IconButton, Typography } from '@mui/joy';
// // import MusicCard from '../Components/MusicCard';
// import {DeleteIcon, SearchRounded} from '@mui/icons-material';
// import './SellersProfile.css'
// // import images from './images.jpeg'
// import SellerProfileSection from '../Components/SellerProfileSection';
// import MusicCardShow from '../Components/MusicCardShow'
// import BuyerData from '../Components/BuyerData';
// import SearchBar from '../Components/SearchBar';
// import { getSoldSongDataSeller } from '../Backend/Data';


// function BuyersDataPage({uid}) {
//     let [SoldList, SoldListf] = useState([])

//     async function FetchSoldSongs(){
//         let songData = await getSoldSongDataSeller(uid)
//         SoldListf(songData.data)
//     }
//     useEffect(()=>{
//         FetchSoldSongs()
//     })
//     if (SoldList.length === 1) {
//         return (
//             <Box sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
//                 {/* <Box height={'12%'} minHeight={'12%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//                     <Box bgcolor={'#13121D'} flexBasis={'65%'} borderRadius={100} height={'60%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
//                         <input placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }} />
//                         <Box marginRight={'1%'}><IconButton aria-label="Search" sx={{'&:hover': {backgroundColor: 'transparent', color: 'gray'}}} ><SearchRounded></SearchRounded></IconButton></Box>
//                     </Box>
//                 </Box> */}
//                 {/* <SearchBar></SearchBar> */}
//                 <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} >
//                     <Typography variant="h4" sx={{color: 'white', }}>No Records</Typography>
//                 </Box>
//                 {/* </div> */}
//             </Box>
//         )
//     }else{
//         return (
//             <Box sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
//                 {/* <Box height={'12%'} minHeight={'12%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//                     <Box bgcolor={'#13121D'} flexBasis={'65%'} borderRadius={100} height={'60%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
//                         <input placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }} />
//                         <Box marginRight={'1%'}><IconButton aria-label="Search" sx={{'&:hover': {backgroundColor: 'transparent', color: 'gray'}}} ><SearchRounded></SearchRounded></IconButton></Box>
//                     </Box>
//                 </Box> */}
//                 {/* <SearchBar></SearchBar> */}
//                 <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} >
//                     <Grid container height={'auto'} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} padding={'1%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
//                         {Array.from(Array(10)).map((data, index) => (
//                             <BuyerData></BuyerData>
//                         ))}
//                     </Grid>
//                 </Box>
//                 {/* </div> */}
//             </Box>
//         )
//     }

// }

// export default BuyersDataPage




import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/joy';
import { SearchRounded } from '@mui/icons-material';
import './SellersProfile.css';
import BuyerData from '../Components/BuyerData';
import { getSoldSongDataSeller } from '../Backend/Data';

function BuyersDataPage({ uid }) {
    const [SoldList, setSoldList] = useState([]); 

    async function FetchSoldSongs() {
        try {
            let songData = await getSoldSongDataSeller(uid);
            if (songData && songData.data) { 
                setSoldList(songData.data);
                console.log(songData.data)
            } else {
                setSoldList([]);
            }
        } catch (error) {
            console.error("Error fetching sold songs:", error);
            setSoldList([]);
        }
    }

    useEffect(() => {
        FetchSoldSongs();
    }, [uid]);

    return (
        <Box sx={{overflowY: 'auto','&::-webkit-scrollbar': { width: '12px' },'&::-webkit-scrollbar-thumb': { backgroundColor: '#13121D', borderRadius: '10px' },'&::-webkit-scrollbar-track': { backgroundColor: '#070C12', borderRadius: '10px' }}} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
            {SoldList.length === 0 ? (
                <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Typography variant="h4" sx={{ color: 'gray'}}>No Records</Typography>
                </Box>
            ) : (<Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'}>
                    <Grid container height={'auto'} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} padding={'1%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        {SoldList.map((data, index) => (
                            <BuyerData key={index} data={data} /> // Pass data as a prop if needed
                        ))}
                        {/* {Array.from(Array(10)).map((data, index) => (
                            <BuyerData></BuyerData>
                        ))} */}
                    </Grid>
                </Box>
            )}
        </Box>
    );
}

export default BuyersDataPage;

