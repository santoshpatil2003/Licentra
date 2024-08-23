import React from 'react'
import { Box, Grid } from '@mui/joy';
import images from './images.jpeg'

function Count({ name, count }) {
    return (
        <Box display={'flex'} flexBasis={'30%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box marginBottom={'5%'} color={'white'}>{name}</Box>
            <Box color={'white'}>{count}</Box>
        </Box>
    )
}

function SellerProfileSection() {
    return (
        <Box borderBottom={'1px solid'} marginBottom={'1%'} borderColor={'#312E2E'} display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
            <Box height={"30vh"} display={'flex'} justifyContent={'center'} width={'30%'} alignItems={'center'}>
                <Box height={"25vh"} width={"25vh"} borderRadius={150} bgcolor={'black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={images} alt="Profile" style={{ objectFit: "cover", overflow: "hidden", borderRadius: "200px" }} />
                </Box>
            </Box>
            <Box height={'100%'} width={'75%'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} >
                <Box width={'70%'} height={'50%'} display={'flex'} flexDirection={'row'} >
                    <Count name={'Records'} count={'4'} ></Count>
                    <Count name={'Sold'} count={'0'} ></Count>
                    <Count name={'Base Price'} count={'0'} ></Count>
                </Box>
            </Box>
        </Box>
    )
}

export default SellerProfileSection
