import { React, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/joy';
import SearchBar from '../Components/SearchBar';
import { getSongCollectionDataOfBuyer } from '../Backend/Data';
import MusicCardShow from '../Components/MusicCardShow';

function CollectionPageBuyer({ uid }) {
    let [list2, setlist2] = useState([]);
    let [search, searchf] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const l = await getSongCollectionDataOfBuyer(uid);
                if (Array.isArray(l.songs)) {
                    setlist2(l.songs); 
                    console.log(l)
                } else {
                    console.error('Expected an array, but got:', l);
                    setlist2([]); 
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setlist2([]); 
            }
        };
        fetchData();
        return () => { };
    }, [uid]);


    return (
        <Box sx={{ overflowY: 'auto', '&::-webkit-scrollbar': { width: '12px' }, '&::-webkit-scrollbar-thumb': { backgroundColor: '#13121D', borderRadius: '10px' }, '&::-webkit-scrollbar-track': { backgroundColor: '#070C12', borderRadius: '10px' } }} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
            {/* <SearchBar search={search} searchf={searchf}></SearchBar> */}
            {
                list2.length === 0?
                <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box height={'fit-content'} width={'fit-content'}>
                        <Typography sx={{color: 'gray'}} >No collection Added</Typography>
                    </Box>
                </Box>:
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} width={'100%'} paddingLeft={'2%'} paddingTop={'1%'}>
                    {Array.isArray(list2) && list2.map((data, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <MusicCardShow button_desable={true} uid={uid} data={data}/>
                        </Grid>
                    ))}
                </Grid>}
            </Box>
            }
        </Box>
    );
}

export default CollectionPageBuyer;











