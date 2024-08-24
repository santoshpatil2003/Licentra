import {React, useState} from 'react';
import { Box, Button, Grid, IconButton } from '@mui/joy';
import MusicCard2 from './MusicCard2';
import {SearchRounded} from '@mui/icons-material';
import {sign_out} from '../Backend/Auth'
import SearchBar from './SearchBar';
// import './Main.css';

function Main() {
    let [search, searchf] = useState(false);
    return (
        <Box sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} width={'75vw'} height={'90vh'} maxHeight={'90vh'} >
            <SearchBar search={search} searchf={searchf}></SearchBar>
            {/* <div className="custom-scrollbar"> */}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} paddingLeft={'2%'} paddingTop={'1%'}>
                    {Array.from(Array(12)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <MusicCard2 />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* </div> */}
        </Box>
    );
}

export default Main;











// import React from 'react'
// import { Box, Grid, Input, ListItem } from '@mui/joy';
// import MusicCard from './MusicCard';

// function Main() {
//     return (
//         <Box display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
//             <Box height={'12%'} maxHeight={'12%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//                 <Box flexBasis={'65%'} borderRadius={100} height={'60%'}>
//                     {/* <Input placeholder="Type in here…" variant="outlined" size='lg' fullWidth/> */}
//                     <input placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }}></input>
//                 </Box>
//             </Box>
//             <div style={{ scrollBehavior: 'smooth', overflowY: 'scroll', '&::-webkit-scrollbar-thumb':{backgroundColor: 'red'}, '&::-webkit-scrollbar-track':{backgroundColor:"red"} }}>
//                 <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
//                     <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} paddingLeft={'4%'} paddingTop={'1%'}>
//                         {Array.from(Array(12)).map((_, index) => (
//                             <Grid xs={2} sm={4} md={4} key={index}>
//                                 <MusicCard></MusicCard>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Box>
//             </div>
//         </Box>
//     )
// }

// export default Main
