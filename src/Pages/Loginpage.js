import React from "react";
import { Avatar, Grid, Paper, TextField, Typography, Link } from "@material-ui/core";
import BrushIcon from '@mui/icons-material/Brush';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Loginpage = () => {
    const PaperStyle = { padding: 20, width: 300, height: '70vh', margin: "20px auto" }
    const AvatarStyle = { backgroundColor: 'brown' }
    const btnStyle = { margin: '8 0' }
    return (
        <Grid>
            <Paper elevation={10} style={PaperStyle} >
                <Grid align='Center'>
                    <Avatar style={AvatarStyle}> <BrushIcon /> </Avatar>
                    <h2>Sign-in </h2>
                </Grid>
                <TextField label='Username' placeholder="Enter  Email" fullWidth required />
                <TextField label='Password' placeholder="Enter  Password" type='password' fullWidth required />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                </FormGroup>
                <Button type="submit" variant="contained" color="success" style={btnStyle} fullWidth> Sign-in </Button>
                <Typography>
                    <Link href="#">Forgot Password?</Link>
                </Typography>
                <Typography>Do you have an acount?
                    <Link href="#">Sign-Up</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Loginpage;
