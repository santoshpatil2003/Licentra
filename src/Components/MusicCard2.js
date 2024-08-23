import { React, useState } from 'react';
// import AnimateHeight from 'react-animate-height'
import { Card, CardCover, CardContent, Typography, Button, Box } from '@mui/joy';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import images from "./images.jpeg"
import BuyPopModel from './BuyPopModel';

const enter = (showf, setHeight, height) => {
    showf(true)
    setHeight(height === 0 ? '20%' : 0)
}

const leave = (showf, setHeight, height) => {
    showf(false)
    setHeight(height = 0)
}


function MusicCard2() {
    const [show, showf] = useState(false);
    const [height, setHeight] = useState(0);
    const title = (
        <CardContent sx={{ justifyContent: 'flex-end' }}>
            <Typography level="title-lg" textColor="#fff">
                Paradise
            </Typography>
            <Typography
                // startDecorator={<LocationOnRoundedIcon />}
                textColor="neutral.300"
            >
                Justin Bieber, Selena Gomez...
            </Typography>
        </CardContent>
    );

    const cost = (
        <CardContent style={{ justifyContent: 'flex-end', height: { height } }}>
            {/* <Box sx={{transition: 'height 0.3s ease-in-out', height: height}}>
                <Button variant='solid' fullWidth>
                    18$
                </Button>
            </Box> */}
            <Box>
                <BuyPopModel></BuyPopModel>
                {/* <Button variant='solid' fullWidth>
                    18$
                </Button> */}
            </Box>
        </CardContent>
    )
    return (
        <div style={{width: '100%', height:'100%'}} onMouseEnter={() => { enter(showf, setHeight, height) }} onMouseLeave={() => { leave(showf, setHeight, height) }} >
            <Card sx={{ minHeight: '180px', width: "84%", height: "70%" }}>
                <CardCover>
                    <img
                        src={images}
                        loading="lazy"
                        alt=""
                    />
                </CardCover>
                <CardCover
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    }}
                />
                {show ? cost : title}
            </Card>
        </div>
    )
}

export default MusicCard2



