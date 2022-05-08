import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const SingleCard = () => {
    // const [singleLaunch, setLaunch] = useState({});
    // const propsMap = launchProps.map(l => setLaunch(l));

    // console.log(launchProps);
    // launchProps.slice(0, 10).map(l => console.log(l))

    const allData = useSelector(state => state.launch[0]);

    const s = allData.map(l => { return l });

    console.log(s?.links);

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default SingleCard;