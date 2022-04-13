import React from "react";
import { Avatar, Grid, Paper, TextField, Link, Typography } from "@material-ui/core";
import BrushIcon from '@mui/icons-material/Brush';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const SignUp = () => {
    const PaperStyle = { padding: 20, width: 300, height: '70vh', margin: "20px auto" }
    const AvatarStyle = { backgroundColor: 'brown' }
    const btnStyle = { margin: '8 0' }
    return (
        <Grid>
            <Paper elevation={10} style={PaperStyle} >
                <Grid align='Center'>
                    <Avatar style={AvatarStyle}> <BrushIcon /> </Avatar>
                    <h2>Sign-up </h2>
                </Grid>
                <TextField label='Name' placeholder="Enter Full Name" fullWidth required />
                <TextField label='Email' placeholder="Enter Email " type='emai' fullWidth required />
                <TextField label='Mobile Numbar' placeholder="Enter Mobile Number " type='emai' fullWidth required />
                <TextField label='Password' placeholder="Create New Password " type='emai' fullWidth required />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                </FormGroup>
                <Button type="submit" variant="contained" color="success" style={btnStyle} fullWidth> Sign-up </Button>
                <Typography>You already have an account.
                    <Link>Sign-in</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default SignUp;
