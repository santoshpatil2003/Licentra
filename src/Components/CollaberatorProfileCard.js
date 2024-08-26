import { React, useState } from 'react';
import { Card, CardCover, CardContent, Typography, Button, Box } from '@mui/joy';
import images from "./images.jpeg"



function CollaberatorProfileCard({show, button_desable }) {
    const title = (
        <CardContent sx={{ display:'flex', justifyContent: 'center', marginLeft: '0%'}}>
            <Typography level="title-sm" textColor="#fff" marginTop={0} marginBottom={0}>
                Paradise
            </Typography>
            <Typography textColor="neutral.300" fontSize={'0.7rem'}>
                Justin Bieber, Selena Gomez...
            </Typography>
        </CardContent>
    );

    const cost = (
        <CardContent sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '90%'}} >
            <Box height={'100%'} width={'100%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                {
                    button_desable ?
                        <Box sx={{ backgroundColor: '#111923' }} display={'flex'} justifyContent={'center'} alignItems={'center'} variant='solid' width={'100%'} height={'100%'} borderRadius={5}>
                            <Typography sx={{ color: 'white' }}>18$</Typography>
                        </Box> :
                        <Button variant='solid' fullWidth>
                            18$
                        </Button>}
            </Box>
        </CardContent>
    )
    return (
        show? 
        <Box height={'30%'} width={'100%'} borderRadius={10} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
            <Box bgcolor={'#13121D'} height={'90%'} width={'95%'} borderRadius={10} display={'flex'} flexDirection={'row'}>
                {/* '#13121D' */}
                <Box height={'100%'} width={'20%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                    <Card sx={{ width: '20%', height: '20%' }}>
                        <CardCover>
                            <img src={images} loading="lazy" alt="" />
                        </CardCover>
                    </Card>
                </Box>
                <Box width={'60%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                    <Box width={'90%'} height={'90%'} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            {title}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        
        : <Box></Box>
    )
}

export default CollaberatorProfileCard



