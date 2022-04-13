import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    React.useEffect(() => {
        // Update the document title using the browser API
        console.log("page oaded")
    });

    function get_data()

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                    <Item>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/300"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href='./cardd' size="small">Cart</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item> <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://picsum.photos/300"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href='./cardd' size="small">Cart</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item> <Card sx={{ maxWidth: 400, }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://picsum.photos/300"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href='./cardd' size="small">Cart</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card></Item>
                </Grid>

            </Grid>
        </Box>
    );
}

