import {React} from 'react'
import { Box, Button, IconButton } from '@mui/joy';
import {SearchRounded} from '@mui/icons-material';
import {sign_out} from '../Backend/Auth'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function SearchBar({search, searchf}) {
    return (
        // <Box height={'12%'} minHeight={'12%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        //     <Box bgcolor={'#13121D'} flexBasis={'65%'} borderRadius={100} height={'60%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
        //         {/* <Input placeholder="Type in here…" variant="outlined" size='lg' fullWidth/> */}
        //         <input placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }} />
        //         <Box marginRight={'1%'}><IconButton aria-label="Search" sx={{ '&:hover': { backgroundColor: 'transparent', color: 'gray' } }} ><SearchRounded></SearchRounded></IconButton></Box>
        //     </Box>
        //     <Box sx={{ position: 'relative', left: '10%' }} > <Button onClick={sign_out} >Sig Out</Button> </Box>
        // </Box>
        <Box height={'12%'} minHeight={'12%'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <Box width={'1%'}>
                {search? <IconButton onClick={()=>{searchf(false)}} sx={{'&:hover':{backgroundColor: 'transparent', color: 'gray'}}}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>: <Box></Box>}
            </Box>
            <Box bgcolor={'#13121D'} flexBasis={'65%'} borderRadius={100} height={'60%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
                <Box bgcolor={'#13121D'} flexBasis={'100%'} borderRadius={100} height={'100%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
                    <input onFocus={()=>{searchf(true)}} onBlur={()=>{searchf(false)}} placeholder="Search artist here..." style={{ height: '100%', border: 'None', width: "100%", borderRadius: 100, paddingLeft: 25, paddingRight: 10, outline: 'none', backgroundColor: '#13121D', color: 'white', fontSize: '1.025rem' }} />
                    <Box marginRight={'1%'}><IconButton aria-label="Search" sx={{ '&:hover': { backgroundColor: 'transparent', color: 'gray' } }} ><SearchRounded></SearchRounded></IconButton></Box>
                </Box>
            </Box>
            <Box> <Button onClick={sign_out} >Sign Out</Button> </Box>
        </Box>
    );
}

export default SearchBar

