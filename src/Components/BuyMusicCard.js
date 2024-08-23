import { React, useState } from 'react';
import { Card, CardCover, CardContent, Typography, Button, Box } from '@mui/joy';
import images from "./images.jpeg"

// const enter = (showf, setHeight, height) => {
//     showf(true)
//     setHeight(height === 0 ? '20%' : 0)
// }

// const leave = (showf, setHeight, height) => {
//     showf(false)
//     setHeight(height = 0)
// }


function BuyMusicCard({ button_desable, song_name, song_by, cost2, pic }) {
    const title = (
        <CardContent sx={{ display:'flex', justifyContent: 'center', marginLeft: '0%'}}>
            <Typography level="title-lg" textColor="#fff" marginTop={0} marginBottom={0}>
                {song_name}
            </Typography>
            <Typography textColor="neutral.300" fontSize={'0.9rem'}>
                {song_by}
            </Typography>
        </CardContent>
    );

    const cost = (
        <CardContent sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '100%'}} >
            <Box height={'100%'} width={'100%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                {
                    button_desable ?
                        <Box sx={{ backgroundColor: '#111923' }} display={'flex'} justifyContent={'center'} alignItems={'center'} variant='solid' width={'100%'} height={'60%'} borderRadius={5}>
                            <Typography sx={{ color: 'white' }}>{`${cost2}$`}</Typography>
                        </Box> :
                        <Button variant='solid' fullWidth>
                            {`${cost2}$`}
                        </Button>}
            </Box>
        </CardContent>
    ) 
    return (
        <Box bgcolor={'#13121D'} height={'25%'} width={'95%'} borderRadius={10} display={'flex'} flexDirection={'row'} >
            {/* '#13121D' */}
            <Box height={'100%'} width={'40%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Card sx={{ width: '60%', height: '60%' }}>
                    <CardCover>
                        <img src={pic} loading="lazy" alt="" />
                    </CardCover>
                </Card>
            </Box>
            <Box width={'60%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                <Box width={'90%'} height={'90%'} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'start'}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {title}
                    </Box>
                    <Box display={'flex'} justifyContent={'start'} alignItems={'center'} width={'100%'} height={'50%'} >
                        {cost}
                    </Box>
                </Box>
            </Box>
            {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {title}
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14%'} >
                {cost}
            </Box> */}
        </Box>
    )
}

export default BuyMusicCard



