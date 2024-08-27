import {React, useEffect, useState} from 'react';
import { Box, Typography} from '@mui/joy';
// import MusicCard2 from './MusicCard2';
// import SearchBar from './SearchBar';
// import SalesGraph from './SalesGraph';
import SalesBarGraph from './SalesBarGraph';
import { getSeller, getSongDataSellerAll } from '../Backend/Data';

function Main({uid}) {
    let [totalsales, totalsalesf] = useState(0)
    const [MusicList2, MusicListf2] = useState([])
    const [ProfileData2, ProfileDataf2] = useState({})

    async function GetSellerData(){
        let SellerData = await getSeller(uid)
        let MusicDataList = await getSongDataSellerAll(uid)
        MusicListf2(MusicDataList.songs)
        ProfileDataf2(SellerData.data)
    }

    useEffect(()=>{
        GetSellerData()
    },[uid])
    return (
        <Box justifyContent={'center'} alignItems={'center'} sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} width={'75vw'} height={'100vh'} maxHeight={'100vh'} >
            <Box height={'90%'} width={'97%'} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Box display={'flex'} justifyContent={'space-between'} height={'20%'} width={'100%'} marginBottom={'1%'}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'30%'} sx={{borderStyle: 'solid', borderColor: '#262626', borderWidth: '1px'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Total Sales</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>{`${totalsales}$`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'30%'} sx={{borderStyle: 'solid', borderColor: '#262626', borderWidth: '1px'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Collections Sold</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>{`${ProfileData2.sold}`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'30%'} sx={{borderStyle: 'solid', borderColor: '#262626', borderWidth: '1px'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Total Collections</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>{`${MusicList2.length}`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {/* <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'25%'} sx={{borderStyle: 'solid', borderColor: '#262626', borderWidth: '1px'}}>
                        <Box width={'fit-content'} height={'fit-content'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>Customer</Typography>
                            </Box>
                            <Box width={'fit-content'}>
                                <Typography sx={{color: 'white'}}>0</Typography>
                            </Box>
                        </Box>
                    </Box> */}
                </Box>
                {/* graph */}
                <Box height={'80%'} width={'100%'}>
                    <Box bgcolor={'whitesmoke'} height={'100%'} width={'100%'} sx={{borderStyle: 'solid', borderColor: '#262626', borderWidth: '1px'}}>
                        <SalesBarGraph uid={uid} totalsales={totalsales} totalsalesf={totalsalesf} ></SalesBarGraph>
                    </Box>
                    {/* <SalesGraph></SalesGraph> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Main;








































