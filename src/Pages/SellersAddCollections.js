import {React, useState} from 'react'
import { Box, Input, FormLabel, Typography, Button, CircularProgress } from '@mui/joy'
import CostInput from '../Components/CostInput';
import RestrictionsInput from '../Components/RestrictionsInput';
import './SellersAddCollections.css'
import CollaberatorsIncriment from '../Components/CollaberatorsIncriment';
import CollaberatorsData from '../Components/CollaberatorsData';
import UploadMusicPic from '../Components/UploadMusicPic';
import UploadMusicAudio from '../Components/UploadMusicAudio';
import { addSongToSeller } from '../Backend/Data';




function SellersAddCollections({uid}) {
    let [collaboratorsn, collaboratorsnf] = useState('');
    let [collaboratorse, collaboratorsef] = useState('');
    let [collaboratorsp, collaboratorspf] = useState('');
    function a(e1){
        collaboratorsnf(collaboratorsn = e1)
        console.log(collaboratorsn)
    }
    
    function a2(e1){
        collaboratorsef(collaboratorse = e1)
        console.log(collaboratorse)
    }
    
    function a3(e1){
        collaboratorspf(collaboratorsp = e1)
        console.log(collaboratorsp)
    }

    function CollabList(list, setlist, push) {
        if (push){
            list.push((<CollaberatorsData collaboratorsnf={a} collaboratorsef={a2} collaboratorspf={a3}></CollaberatorsData>))
            setlist(list)
        }else{
            list.pop()
            setlist(list)
        }
    }

    const [ImageFile, ImageFilef] = useState(undefined);
    const [AudioFile, AudioFilef] = useState(undefined);
    const [count, setCount] = useState(1)
    const [list, setlist] = useState([<CollaberatorsData collaboratorsnf={a} collaboratorsef={a2} collaboratorspf={a3} ></CollaberatorsData>])
    const [cost, costf] = useState('');
    const [music_name, music_namef] = useState('');
    const [restriction, restrictionf] = useState('');
    const [artist_name, artist_namef] = useState(''); 
    let [collaborators, collaboratorsf] = useState([]);
    let [isLoading, isLoadingf] = useState(false);


    // if (AudioFile !== undefined){
    //     console.log(`the size of the file is ${AudioFile.size}`)
    // }

    function AddCollab(incriment){
        let data = {
            'name' : collaboratorsn,
            'email' : collaboratorse,
            'share' : collaboratorsp,
            
        }
        if (incriment === true){
            let ar = [...collaborators, data]
            collaboratorsf(ar)
        }else{
            let ar2 = collaborators.pop()
            collaboratorsf(ar2)
        }
        console.log(data)
    }


    function click(){
        isLoadingf(true)
        let data2 = {
            'name' : collaboratorsn,
            'email' : collaboratorse,
            'share' : collaboratorsp,
        }
        let ar = [...collaborators, data2]
        console.log(ar)
        let music = {
            song_by : artist_name,
            song_name: music_name,
            song_price: cost,
            restrictions: restriction,
            collaborators: ar
        }
        addSongToSeller(uid, music, AudioFile, ImageFile).then(()=>{
            console.log('song added')
            isLoadingf(false)
        })
    }

    return (
            <Box sx={{overflowY: 'auto', '&::-webkit-scrollbar':{width: '12px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: '#13121D', borderRadius: '10px'}, '&::-webkit-scrollbar-track':{backgroundColor: '#070C12', borderRadius: '10px'}}} display={'flex'} flexDirection={'column'} maxHeight={'100vh'} flexBasis={"80%"}>
                <Box height={'50%'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}  >
                    <Box  bgcolor={'#13121D'} borderRadius={10} height={'90%'} width={'33.33%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <UploadMusicPic ImageFilef={ImageFilef}></UploadMusicPic>
                    </Box>
                    <Box height={'90%'} width={'60%'}>
                        {/* <FormControl> */}
                            <CostInput costf={costf}></CostInput>
                            <FormLabel sx={{ color: 'white' }} >Music Name</FormLabel>
                            <Input onChange={(e)=>{music_namef(e.target.value)}} sx={{backgroundColor: '#13121D', border: 'none', color: "white", outline: 'none'}} placeholder="Placeholder" />
                            {/* <FormHelperText sx={{color: '#808080'}} >Synchronization License: Needed if you want to use music in a visual context, like in a film, TV show, or video game. It covers the right to sync the music with the visuals.</FormHelperText> */}
                            <FormLabel sx={{ color: 'white', marginTop: '1%' }} >Restrictions</FormLabel>
                            <RestrictionsInput restriction={restriction} restrictionf={restrictionf} ></RestrictionsInput>
                        {/* </FormControl> */}
                    </Box>
                </Box>
                <Box height={'50%'} display={'flex'} justifyContent={'space-around'} alignItems={'start'}  >
                    <Box height={'100%'} width={'96.67%'} >
                        <Box>
                            <FormLabel sx={{ color: 'white', marginBottom: '0.5%' }} >Artist's Name</FormLabel>
                            <Input onChange={(e)=>{artist_namef(e.target.value)}} sx={{backgroundColor: '#13121D', border: 'none', color: "white", outline: 'none'}} placeholder="Placeholder" />
                        </Box>
                        <Box height={'auto'}>
                            <Box height={'15%'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                                <Typography sx={{color: 'white'}}>Collaborators</Typography>
                                <CollaberatorsIncriment AddCollab={AddCollab} collaboratorsn={collaboratorsn} collaboratorse={collaboratorse} collaboratorsp={collaboratorsp}  count={count} setCount={setCount} listincrement={CollabList} list={list} setlist={setlist} ></CollaberatorsIncriment>
                            </Box>
                            {list.map((course) => course)}
                        </Box>
                        <Box height={'15%'} marginTop={'1%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{zIndex: 1}} >
                            <UploadMusicAudio variant={'contained'} AudioFilef={AudioFilef} ></UploadMusicAudio>
                            {/* <Button variant='solid' onClick={()=>{click()}} >Sync Up</Button> */}
                            <Button variant='solid' onClick={()=>{click()}} >{isLoading?<CircularProgress size="sm" />: 'Sync Up'}</Button>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
    )
}

export default SellersAddCollections
