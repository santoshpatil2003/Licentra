import {React} from 'react'
import { Box, Typography, Button } from '@mui/joy'


function CollaberatorsIncriment({ AddCollab, count, setCount, listincrement, list, setlist, collaboratorsn, collaboratorse, collaboratorsp}) {
    function Increment(count, setCount, listincrement, list, setlist) {
        if (collaboratorsn !== '' || collaboratorse !== '' || collaboratorsp !== ''){
            setCount(count + 1)
            listincrement(list, setlist, true)
            AddCollab(true)
        }
    }

    function Decrement(count, setCount, listincrement, list, setlist) {
        if (count !== 0) {
            setCount(count - 1)
            listincrement(list, setlist, false)
            AddCollab(false)
        }
    }
    return (
        <Box bgcolor={'#13121D'} height={'80%'} marginTop={'0.5%'} width={'12%'} borderRadius={15} display={'flex'} flexDirection={'row'} >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'25%'}>
                <Button onClick={()=>{Decrement(count, setCount, listincrement, list, setlist)}} variant="outlined" color='white' sx={{ border: 'none', color: 'white' }} >-</Button>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'50%'}>
                <Typography sx={{ color: "white" }}>{count}</Typography>
            </Box>
            <Box borderRadius={15} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'25%'}>
                <Button onClick={()=>{Increment(count, setCount, listincrement, list, setlist)}} variant="outlined" color='white' sx={{ border: 'none', color: 'white' }} >+</Button>
            </Box>
        </Box>
    )
}

export default CollaberatorsIncriment
