import React from "react";
import { Avatar, Grid, Paper, TextField, Typography, Link, Box } from "@material-ui/core";
import BrushIcon from '@mui/icons-material/Brush';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Product = () => {
    const PaperStyle = { padding: 20, width: 1000, height: '70vh', margin: "80px auto", backgroundColor: '#ffffff' }
    const AvatarStyle = { backgroundColor: 'brown' }
    const btnStyle = { margin: '8 0' }
    return (
        <Grid>
            <Paper elevation={10} style={PaperStyle} >
                <Grid align='Center' >
                    <Box>

                    </Box>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Product;
