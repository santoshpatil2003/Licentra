import {React, useState} from 'react';
import SigninPage from './SignInPage';
import SigninPageUser from './SigninPageUser';
import { Box, Button } from '@mui/joy';

function SignInParent() {
    const [isSignUpP, setIsSignUpP] = useState(true);
    return (
        <Box bgcolor={'#070C12'} display={"flex"} alignItems={'center'} justifyContent={'space-between'} height={'100vh'} flexDirection={'column'} maxHeight={'100vh'}>
            <Box width={'100vw'} height={'9%'} justifyContent={'end'} display={'flex'} alignItems={'center'} >
                <Box width={'10%'}>
                    <Button variant='outlined' sx={{ borderRadius: '20px', width: '90%' }} color="primary" onClick={() => setIsSignUpP(!isSignUpP)}>{isSignUpP ? "Buyer":'Seller'}</Button>
                </Box>
            </Box>
            <Box display={"flex"} alignItems={'center'} justifyContent={'center'} height={'100vh'} flexDirection={'column'} maxHeight={'100vh'} width={'100vw'}>
                {isSignUpP ? <SigninPage></SigninPage> : <SigninPageUser></SigninPageUser>}
            </Box>
        </Box>
    )
}

export default SignInParent
