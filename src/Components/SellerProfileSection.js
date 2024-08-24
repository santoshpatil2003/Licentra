import React from 'react'
import { Box, Grid,Typography } from '@mui/joy';
import images from './images.jpeg'

function Count({ name, count }) {
    return (
        <Box display={'flex'} flexBasis={'30%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box marginBottom={'5%'} color={'white'}>{name}</Box>
            <Box color={'white'}>{count}</Box>
        </Box>
    )
}

function SellerProfileSection({name, user_name,Record, Sold, BasePrice}) {
    return (
        <Box borderBottom={'1px solid'} marginBottom={'1%'} borderColor={'#312E2E'} display={'flex'} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
            <Box height={"30vh"} flexDirection={'column'} display={'flex'} justifyContent={'center'} width={'30%'} alignItems={'center'}>
                <Box height={"22vh"} width={"22vh"} borderRadius={150} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={images} alt="Profile" style={{ objectFit: "cover", overflow: "hidden", borderRadius: "200px" }} />
                </Box>
                <Box width={'100%'} height={'fit-content'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Box width={'fit-content'} height={'fit-content'}><Typography sx={{color: 'white', fontSize: '0.9rem'}}>{name}</Typography></Box>
                    <Box width={'fit-content'} height={'fit-content'}><Typography sx={{color: 'grey', fontSize: '0.8rem'}}>{`${'@'}${user_name}`}</Typography></Box>
                </Box>
            </Box>
            <Box height={'100%'} width={'75%'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} >
                <Box width={'70%'} height={'50%'} display={'flex'} flexDirection={'row'} >
                    <Count name={'Records'} count={`${Record}`} ></Count>
                    <Count name={'Sold'} count={'0'} ></Count>
                    <Count name={'Base Price'} count={'0'} ></Count>
                </Box>
            </Box>
        </Box>
    )
}

export default SellerProfileSection
