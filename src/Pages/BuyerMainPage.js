import {React, useState, useEffect} from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/joy';
// import MusicCard2 from './MusicCard2';
// import MusicCard2 from '../Components/MusicCard2';
import MusicCard from '../Components/MusicCard';
import {SearchRounded} from '@mui/icons-material';
import {sign_out} from '../Backend/Auth'
import { getAllSongsFromGlobal } from '../Backend/Data';
import SearchBar from '../Components/SearchBar';
// import './Main.css';

function BuyerMainPage({uid}) {
    let [list, setlist] = useState([]);
    let [search, searchf] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const l = await getSongDataSellerAll(uid);
                const l = await getAllSongsFromGlobal()
                if (Array.isArray(l.data)) {
                    setlist(l.data); 
                } else {
                    console.error('Expected an array, but got:', l);
                    setlist([]); 
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setlist([]); 
            }
        };

        fetchData();
        return () => { };
    }, []);
    return (
        <Box sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
            <SearchBar search={search} searchf={searchf}></SearchBar>
            {/* <div className="custom-scrollbar"> */}
            {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} paddingLeft={'2%'} paddingTop={'1%'}>
                    {Array.from(Array(12)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <MusicCard2 />
                        </Grid>
                    ))}
                </Grid>
            </Box> */}
            {
                list.length === 0?
                <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box height={'fit-content'} width={'fit-content'}>
                        <Typography sx={{color: 'gray'}} >No collection Added</Typography>
                    </Box>
                </Box>:
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} paddingLeft={'2%'} paddingTop={'1%'}>
                    {Array.isArray(list) && list.map((data, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            {/* <MusicCard2 uid={uid} data={data}/> */}
                            <MusicCard uid={uid} data={data}/>
                        </Grid>
                    ))}
                </Grid>}
            </Box>
            }
        </Box>
    );
}

export default BuyerMainPage;











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
