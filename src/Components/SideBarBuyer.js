import {React, useState, useEffect} from 'react'
import { Box, ListItem, Typography } from '@mui/joy';
import SideBarButtons from './SideBarButtons';
import images from "./images.jpeg"
import { getBuyer } from '../Backend/Data';

function SideBarBuyer({select_click, selected, uid}) {
    const [b_user_data, b_user_data_f] = useState({});

    useEffect(()=>{
        const fetch = async () => {
            let ob = await getBuyer(uid);
            // console.log(ob)
            b_user_data_f(ob.data)
        }
        fetch()
    },[]);
    // console.log(b_user_data)
    return (
        <Box maxWidth={"25vw"} maxHeight={'100vh'} height={"100vh"} bgcolor={'#13121D'} display={'flex'} flexDirection={'column'} flexBasis={"30%"}>
            <Box height={"40vh"} display={'flex'} justifyContent={'center'} alignItems={'end'}>
                <Box height={"35vh"} width={"35vh"} borderRadius={150} bgcolor={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={images} alt="Profile" style={{ objectFit: "cover", overflow: "hidden", borderRadius: "200px" }} />
                </Box>
            </Box>
            <Box width={'100%'} height={'fit-content'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Box width={'fit-content'} height={'fit-content'}><Typography sx={{color: 'white'}}>{b_user_data.name}</Typography></Box>
                <Box width={'fit-content'} height={'fit-content'}><Typography sx={{color: 'grey'}}>{`${'@'}${b_user_data.user_name}`}</Typography></Box>
            </Box>
            <Box height={'60vh'} marginTop={'1%'}>
                <SideBarButtons name={'Home'} select_click={select_click} selected={selected} index={0}></SideBarButtons>
                <SideBarButtons name={'Collections'} select_click={select_click} selected={selected} index={1}></SideBarButtons>
                {/* <SideBarButtons name={'Add Collection'} select_click={select_click} selected={selected} index={2}></SideBarButtons>
                <SideBarButtons name={'Sold Items'} select_click={select_click} selected={selected} index={3}></SideBarButtons> */}
                {/* <SideBarButtons name={'Settings'}></SideBarButtons> */}
            </Box>
        </Box>
    )
}

export default SideBarBuyer
