import { React, useState } from 'react';
import { Card, CardCover, CardContent, Typography, Button, Box } from '@mui/joy';
import images from "./images.jpeg"

const enter = (showf, setHeight, height) => {
    showf(true)
    // setHeight(height === 0 ? '20%' : 0)
}

const leave = (showf, setHeight, height) => {
    showf(false)
    // setHeight(height = 0)
}


function MusicCardShow({button_desable, uid, data}) {
    const [show, showf] = useState(false);
    const title = (
        <CardContent sx={{ justifyContent: 'center', marginLeft: '5%' }}>
            <Typography level="title-xlg" textColor="#fff" marginTop={0}>
                {data.song_name}
            </Typography>
            <Typography textColor="neutral.300" fontSize={'0.9rem'}>
                {data.song_by}
            </Typography>
        </CardContent>
    );

    const cost = (
        <CardContent sx={{ justifyContent: 'center', alignItems: 'center', height: '90%'}} >
            <Box marginTop={"1%"} height={35} width={'90%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {/* <Button variant='solid' fullWidth>
                    18$
                </Button> */}
                {
                button_desable? 
                <Box sx={{backgroundColor: '#111923'}} display={'flex'} justifyContent={'center'} alignItems={'center'} variant='solid' width={'100%'} height={'100%'} borderRadius={5}>
                    <Typography sx={{color: 'white'}}>{data.song_price}</Typography>
                </Box>: 
                <Button variant='solid' fullWidth>
                    {data.song_price}
                </Button>}
            </Box>
        </CardContent>
    )
    const edit = (
        <CardContent sx={{ justifyContent: 'center', alignItems: 'center', height: '90%'}} >
            <Box marginTop={"1%"} height={35} width={'90%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {/* <Button variant='solid' fullWidth>
                    18$
                </Button> */}
                {
                // button_desable? 
                // <Box sx={{backgroundColor: '#111923'}} display={'flex'} justifyContent={'center'} alignItems={'center'} variant='solid' width={'100%'} height={'100%'} borderRadius={5}>
                //     <Typography sx={{color: 'white'}}>Edit</Typography>
                // </Box>: 
                <Button variant='solid' fullWidth>
                    Edit
                </Button>}
            </Box>
        </CardContent>
    )
    return (
        <div onMouseEnter={()=>{enter(showf)}} onMouseLeave={()=>{leave(showf)}}>
            <Box bgcolor={'#13121D'} height={300} width={195} borderRadius={10}>
            {/* '#13121D' */}
                <Box height={'61.5%'} display={'flex'} justifyContent={'center'} alignItems={'end'} >
                    <Card sx={{ minHeight: '22vh', width: '22vh', height: '22vh'}}>
                        <CardCover>
                            <img src={data.song_pic_url} loading="lazy" alt=""/>
                        </CardCover>
                    </Card>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    {title}
                </Box>
                {!show?<Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14%'} >
                    {cost}
                </Box>: <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14%'} >
                    {edit}
                </Box>}
            </Box>
        </div>
    )
}

export default MusicCardShow



