// CollaberatorProfileCard
import { React, useState } from 'react';
import { Card, CardCover, CardContent, Typography, Button, Box, Avatar } from '@mui/joy';
import images from "./images.jpeg"

// const enter = (showf, setHeight, height) => {
//     showf(true)
//     setHeight(height === 0 ? '20%' : 0)
// }

// const leave = (showf, setHeight, height) => {
//     showf(false)
//     setHeight(height = 0)
// }

// usernameTaken: async (name) => {
//     await db.collection("users").get().then(querySnapshot => {
//         querySnapshot.forEach(documentSnapshot => {
//             if (documentSnapshot.data().username === name) {
//                 return true;
//             }
//         });
//     });
//     return false;
// }


function SellerProfileSearchBuyer({show, Name, UserName, image, GoSellerProfilePage, puid}) {
    const title = (
        <CardContent sx={{display:'flex', justifyContent: 'start', marginLeft: '0%'}}>
            <Typography level="title-sm" textColor="#fff" marginTop={0} marginBottom={0}>
                {Name}
            </Typography>
            <Typography textColor="neutral.300" fontSize={'0.7rem'}>
                {UserName}
            </Typography>
        </CardContent>
    );

    return (
        show? 
        <div onClick={()=>{GoSellerProfilePage(puid)}} style={{height: '10vh', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Box height={'100%'} width={'100%'}  sx={{'&:hover': {cursor: 'pointer'}}}>
                <Box bgcolor={'black'} margin={'1%'} height={'100%'} width={'100%'} borderRadius={10} display={'flex'} justifyContent={'start'} flexDirection={'row'}>
                    {/* '#13121D' */}
                    <Box height={'100%'} width={'7%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <Avatar alt="avatar" src={images} size="lg" />
                    </Box>
                    <Box width={'60%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                        <Box width={'90%'} height={'90%'} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                {title}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
        : <Box></Box>
    )
}

export default SellerProfileSearchBuyer



