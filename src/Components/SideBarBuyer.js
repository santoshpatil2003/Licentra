import {React, useState, useEffect} from 'react'
import { Box, Typography } from '@mui/joy';
import SideBarButtons from './SideBarButtons';
import images from "./images.jpeg"
import { getBuyer } from '../Backend/Data';

let l = {2: 'red', 3 : "blue", 4: 'green', 5: 'gray', 6: 'brown', 7: 'pink', 8: 'purple', 9: 'greenyellow', 10: 'blueviolet', 11: 'burlywood',12: 'red', 13 : "blue", 14: 'green', 15: 'gray', 16: 'brown', 17: 'pink', 18: 'purple'}

function SideBarBuyer({select_click, selected, uid}) {
    const [b_user_data, b_user_data_f] = useState({});
    const [col, colf] = useState('blue');

    useEffect(()=>{
        const fetch = async () => {
            let ob = await getBuyer(uid);
            b_user_data_f(ob.data)
            console.log(ob.data)
            colf(l[ob.data.name.split('').length])
        }
        fetch()
    },[uid,col]);
    return (
        <Box maxWidth={"25vw"} maxHeight={'100vh'} height={"100vh"} bgcolor={'#13121D'} display={'flex'} flexDirection={'column'} flexBasis={"30%"}>
            <Box height={"40vh"} display={'flex'} justifyContent={'center'} alignItems={'end'}>
                <Box height={"98%"} width={"73%"} borderRadius={'35vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    {/* <img src={images} alt="Profile" style={{ objectFit: "cover", overflow: "hidden", borderRadius: '35vh', height: '100%', width: '100%' }} /> */}
                    {b_user_data.name === undefined?<Box bgcolor={col} height={'100%'} width={'100%'} borderRadius={150} display={'flex'} justifyContent={'center'} alignItems={'center'}><Typography sx={{color: 'white', fontSize: '1rem'}}>{'Loading...'}</Typography></Box>: <Box bgcolor={col} height={'100%'} width={'100%'} borderRadius={150} display={'flex'} justifyContent={'center'} alignItems={'center'}><Typography sx={{color: 'white', fontSize: '3rem'}}>{b_user_data.name.split('')[0].toUpperCase()}</Typography></Box>}
                </Box>
            </Box>
            <Box width={'100%'} height={'fit-content'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Box width={'fit-content'} height={'fit-content'}><Typography sx={{color: 'white'}}>{b_user_data.name}</Typography></Box>
                <Box width={'fit-content'} height={'fit-content'}><Typography sx={{color: 'grey'}}>{`${'@'}${b_user_data.user_name}`}</Typography></Box>
            </Box>
            <Box height={'60vh'} marginTop={'1%'}>
                <SideBarButtons name={'Home'} select_click={select_click} selected={selected} index={0}></SideBarButtons>
                <SideBarButtons name={'Collections'} select_click={select_click} selected={selected} index={1}></SideBarButtons>
            </Box>
        </Box>
    )
}

export default SideBarBuyer
