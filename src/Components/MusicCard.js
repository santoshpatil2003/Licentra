import { React, useEffect, useState, useRef } from 'react';
import { Card, CardCover, CardContent, Typography, Box, IconButton } from '@mui/joy';
import BuyPopModel from './BuyPopModel';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import { downloadSong } from '../Backend/Data';
import Audiof from '../Backend/KALEO - Way Down We Go (Official Music Video) [TubeRipper.com].mp3'

const enter = (showf, setHeight, height) => {
    showf(true)
    setHeight(height === 0 ? '20%' : 0)
}

const leave = (showf, setHeight, height) => {
    showf(false)
    setHeight(height = 0)
}


function MusicCard({b_uid, uid, data }) {
    const [show, showf] = useState(false);
    const [height, setHeight] = useState(0);
    let [pause, pausef] = useState(true)
    let [SongUrl, SongUrlf] = useState('')
    let song = new Audio(Audiof)
    const audioRef = useRef(song)
    
    const playAudio = () => {
        if (pause) {
            audioRef.current.play().then(() => {
                pausef(false); 
            }).catch(error => {
                console.error('Error playing audio:', error);
            });
        } else {
            audioRef.current.pause();
            pausef(true); 
        }
    };

    async function name() {
        let url = await downloadSong(data.seller_id,data.song_id,data.song_name)
        console.log(url.song)
        SongUrlf(url.song)
    }

    useEffect(()=>{
        
        name() 
        
    },[]);


    const title = (
        <CardContent sx={{ justifyContent: 'flex-end' }}>
            <Typography level="title-lg" textColor="#fff">
                {data.song_name}
            </Typography>
            <Typography
                textColor="neutral.300"
            >
                {data.song_by}
            </Typography>
        </CardContent>
    );

    const cost = (
        <CardContent style={{ justifyContent: 'flex-end', height: { height } }}>
            <Box>
                <BuyPopModel song_id={data.song_id} b_uid={b_uid} seller_id={data.seller_id} pic={data.song_pic_url} cost={data.song_price} song_name={data.song_name} song_by={data.song_by} restrictions={data.restrictions} ></BuyPopModel>
            </Box>
        </CardContent>
    )
    return (
        <div style={{ width: '100%', height: '100%' }} onMouseEnter={() => { enter(showf, setHeight, height) }} onMouseLeave={() => { leave(showf, setHeight, height) }} >
            <Card sx={{ minHeight: '180px', width: "84%", height: "70%" }}>
                <CardCover>

                    <img src={data.song_pic_url} loading="lazy" alt="" />
                </CardCover>
                <CardCover
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    }}
                />
                <CardContent>
                    <Box height={'90%'}>
                        <Box display={'flex'} justifyContent={'end'}>
                            <IconButton onClick={()=>{playAudio(pause)}} sx={{'&:hover': { backgroundColor: 'transparent' }}} >{!pause?<PauseCircleFilledOutlinedIcon sx={{ color: 'white' }}></PauseCircleFilledOutlinedIcon>: <PlayCircleFilledOutlinedIcon sx={{ color: 'white' }} ></PlayCircleFilledOutlinedIcon>}</IconButton>
                        </Box>
                    </Box>
                </CardContent>
                {show ? cost : title}
            </Card>
        </div>
    )
}

export default MusicCard



