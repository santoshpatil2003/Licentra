import {React, useState} from 'react';
import { Box, Typography} from '@mui/joy';
// import MusicCard2 from './MusicCard2';
// import SearchBar from './SearchBar';
// import SalesGraph from './SalesGraph';
import SalesBarGraph from './SalesBarGraph';

function Main({uid}) {
    let [search, searchf] = useState(false);
    let [totalsales, totalsalesf] = useState(0)
    return (
        <Box justifyContent={'center'} alignItems={'center'} sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} width={'75vw'} height={'100vh'} maxHeight={'100vh'} >
            <Box height={'90%'} width={'97%'} >
                <Box display={'flex'} height={'20%'} width={'100%'} sx={{borderStyle: 'solid', borderColor: 'gray', borderWidth: '1px'}}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'25%'} sx={{borderRight: '1px solid gray'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Total Sales</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>{`${totalsales}$`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'25%'} sx={{borderRight: '1px solid gray'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Sold</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>0</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'25%'} sx={{borderRight: '1px solid gray'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Collections</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>0</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'25%'}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Customer</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>0</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* graph */}
                <Box height={'80%'}>
                    {/* <SalesGraph></SalesGraph> */}
                    <SalesBarGraph uid={uid} totalsales={totalsales} totalsalesf={totalsalesf} ></SalesBarGraph>
                </Box>
            </Box>
        </Box>
    );
}

export default Main;








































