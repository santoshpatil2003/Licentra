import { React, useState } from 'react'
import { Box, Input, FormLabel, FormControl } from '@mui/joy'
import CollaberatorProfileCard from './CollaberatorProfileCard';

// function a(e){
//     collaboratorsnf(e.target.value)
// }

// function a2(e){
//     collaboratorsef(e.target.value)
// }

// function a3(e){
//     collaboratorspf(e.target.value)
// }

function CollaberatorsData({ collaboratorsnf, collaboratorsef, collaboratorspf }) {
    const [boxl, boxlf] = useState('');
    const [boxlc, boxlcf] = useState('');
    const [showa, showaf] = useState(false);
    function dcdc(h, c, t) {
        boxlf(h)
        boxlcf(c)
        showaf(t)
    }
    return (
        <form>
            <Box sx={{zIndex: 2}} height={'25%'} width={'100%'} display={'flex'} justifyContent={'space-between'}>
                <Box height={'25%'} width={'32%'} sx={{zIndex: 2}}>
                    <FormLabel sx={{ color: 'white' }}>Name</FormLabel>
                    <Box bgcolor={boxlc} height={boxl} width={'100%'} display={'flex'} justifyContent={'start'} flexDirection={'column'} sx={{ borderRadius: '7px',zIndex: 2 }}>
                        <FormControl>
                            <Input
                                onChange={(e) => { collaboratorsnf(e.target.value) }}
                                sx={{
                                    backgroundColor: '#13121D',
                                    border: 'none',
                                    color: 'white',
                                    outline: 'none',
                                }}
                                placeholder="Enter Collaborators Name"
                                onFocus={() => { dcdc('200px', '#13121D', true) }}
                                onBlur={() => { dcdc('', '', false) }}
                            />
                        </FormControl>
                        <CollaberatorProfileCard show={showa} button_desable={true} ></CollaberatorProfileCard>
                    </Box>
                </Box>
                <Box height={'25%'} width={'32%'}>
                    <FormLabel sx={{ color: 'white' }}>Email</FormLabel>
                    <FormControl>
                        <Input
                            onChange={(e) => { collaboratorsef(e.target.value) }}
                            sx={{ backgroundColor: '#13121D', border: 'none', color: 'white', outline: 'none' }}
                            placeholder="Enter Collaborators Email"
                        />
                    </FormControl>
                </Box>
                <Box height={'25%'} width={'32%'}>
                    <FormLabel sx={{ color: 'white' }}>Percentage</FormLabel>
                    <FormControl>
                        <Input
                            onChange={(e) => { collaboratorspf(e.target.value) }}
                            sx={{ backgroundColor: '#13121D', border: 'none', color: 'white', outline: 'none' }}
                            placeholder="Enter Collaborators Share"
                        />
                    </FormControl>
                </Box>
            </Box>
        </form>
    );
}

export default CollaberatorsData
