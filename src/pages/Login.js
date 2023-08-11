import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting');
    
    const data = event.parentNode;
    console.log('form',data);
    // console.log({
    //   email: data.get("userid"),
    //   password: data.get("password"),
    // });
};

const Login = () => {
    // const { mode, setMode } = useColorScheme();
    // setMode('dark');
    

    return (
        <CssVarsProvider 
            // theme={
            // createTheme({
            //     palette: {
            //         mode: 'dark',
            //     },
            // })
            // }
            
        >
        <main>
            <Typography level="h4" component="h1">
                <b>Loan Management Application</b>
            </Typography>
            <Sheet
                sx={{
                    width: 400,
                    mx: 'auto',
                    my: 4,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                    alignItems: 'center',
                    justifyContent:'center'
                }}
                variant="outlined"
            >
            <div>
                
            </div>
            <div>
                <Typography level="h6">
                    <b>Admin Login</b>
                </Typography>
            </div>
            <FormControl>
                <FormLabel>Admin UserID</FormLabel>
                <Input
                    name="userid"
                    type="userid"
                    placeholder="AlphaUser"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Admin Password</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </FormControl>

            <Button sx={{ mt: 1 }} onClick={handleSubmit}>Log in</Button>
            
            </Sheet>
        </main>
        </CssVarsProvider>
    );
}

export default Login;