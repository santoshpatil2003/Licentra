import React, { useState } from 'react';
import { Input, Button, Box, Typography, CircularProgress, Snackbar } from '@mui/joy';
import { sign_in_buyer, sign_up_buyer } from '../Backend/Auth';

const SigninPageUser = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [he, hef] = useState('75%');
    const [wi, wif] = useState('50%');
    const [email, emailf] = useState('');
    const [name, namef] = useState('');
    const [password, passwordf] = useState('');
    const [cpassword, cpasswordf] = useState('');

    // const navigate = useNavigate();
    const handleSignin = () => {
        setIsSignUp(!isSignUp)
        if (isSignUp){
            hef('60%')
            wif('45%')
        }
        else{
            hef('75%')
            wif('50%')
        }
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const addBuyer = async () => {
        setIsLoading(true);
        const user = sign_up_buyer(email, password, name, "sunny200")

        setIsLoading(false);

        if (user === 1) {
            setSnackbarMessage("User with that email already exists");
        } else if (user === false) {
            setSnackbarMessage("Confirm password is incorrect");
        } else if (user === -2) {
            setSnackbarMessage("Please provide valid credentials. The password must be at least 6 characters long and include at least one letter. The email address must be in a proper format.");
        } else if (user === -1) {
            setSnackbarMessage("Some error occurred, check your internet connection and try again");
        } else {
            setSnackbarMessage("User created successfully");
        }

        setSnackbarOpen(true);
    };

    const signInBuyer = async () => {
        setIsLoading(true);
        try {
            const uid = sign_in_buyer(email, password);
            setIsLoading(false);
            if (uid === 0) {
                setSnackbarMessage("No user found");
            } else if (uid === false) {
                setSnackbarMessage("Password is incorrect");
            } else if (uid === 1) {
                setSnackbarMessage("Add valid credentials");
            } else {
                setSnackbarMessage("User signed in successfully");
                
            }
        } catch (error) {
            setSnackbarMessage("An error occurred while signing in.");
            console.error(error);
        } finally {
            setIsLoading(false);
            setSnackbarOpen(true);
        }
    };

    return (
        <Box bgcolor={'#13121D'} width={wi} height={he} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}  >
            <Typography level="h4" textAlign="center" sx={{ color: 'white' }} gutterBottom>
                {isSignUp ? "Sign Up - Buyer" : "Log In - Buyer"}
            </Typography>
            {isSignUp && (
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'10%'}>
                    <Box width={'70%'} height={'100%'}>
                        <Input
                            fullWidth
                            // margin="normal"
                            onChange={(e) => { namef(e.target.value); }}
                            placeholder="Name"
                            sx={{
                                borderRadius: '50px',
                                paddingLeft: '15px',
                                height: '100%'
                            }}

                        />
                    </Box>
                </Box>
            )}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'10%'}>
                <Box width={'70%'} height={'100%'}>
                    <Input
                        fullWidth
                        margin="normal"
                        placeholder="Email"
                        onChange={(e) => { emailf(e.target.value); }}
                        sx={{
                            borderRadius: '50px',
                            paddingLeft: '15px',
                            height: '100%'
                        }}

                    />
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'10%'}>
                <Box width={'70%'} height={'100%'}>
                    <Input
                        fullWidth
                        margin="normal"
                        placeholder="Password"
                        onChange={(e) => { passwordf(e.target.value); }}
                        type="password"
                        sx={{
                            borderRadius: '50px',
                            paddingLeft: '15px',
                            height: '100%'
                        }}

                    />
                </Box>
            </Box>
            {isSignUp && (
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'10%'}>
                    <Box width={'70%'} height={'100%'}>
                        <Input
                            fullWidth
                            margin="normal"
                            placeholder="Confirm Password"
                            onChange={(e) => { cpasswordf(e.target.value); }}
                            type="password"
                            sx={{
                                borderRadius: '50px',
                                paddingLeft: '15px',
                                height: '100%'
                            }}

                        />
                    </Box>
                </Box>
            )}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box width={'22%'}>
                    <Button
                        fullWidth
                        variant="solid"
                        color="primary"
                        onClick={isSignUp ? addBuyer : signInBuyer}
                        disabled={isLoading || (isSignUp && password !== cpassword)}
                        sx={{
                            borderRadius: '50px',
                        }}
                    >
                        {isLoading ? <CircularProgress size="sm" /> : (isSignUp ? "Sign Up - Buyer" : "Log In - Buyer")}
                    </Button>
                </Box>
            </Box>
            <Typography textAlign="center" sx={{ marginTop: '1rem' }}>
                {isSignUp ? "I already have an account" : "I don't have an account"}
                <Button variant="plain" color="primary" onClick={() => handleSignin()}>
                    {isSignUp ? "Log In" : "Sign Up"}
                </Button>
            </Typography>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                color="primary"
                variant="solid"
            >
                {snackbarMessage}
            </Snackbar>
        </Box>
    );
};

export default SigninPageUser;