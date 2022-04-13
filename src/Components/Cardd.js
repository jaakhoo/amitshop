import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 600,
                flexGrow: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item >
                    <ButtonBase sx={{ width: 'auto', height: "auto" }}>
                        <Img alt="complex" src="https://picsum.photos/300" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Remove
                                <Button href='./cardd' size="small">Cart</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            $19.00
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
