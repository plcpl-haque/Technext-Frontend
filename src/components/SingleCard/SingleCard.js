import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const SingleCard = ({ l }) => {

    return (
        <Grid item sx={{ mt: 5 }} xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ margin: '0 auto' }}
                    image={l.links.mission_patch_small}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ color: 'red' }} variant="h6" component="div">
                        model
                    </Typography>
                    <Typography sx={{ color: 'black' }} variant="p" component="div">
                        details.slice(0, 150);
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        {/* <span style={{ textDecoration: 'line-through', color: 'red' }}>${oldPrice}</span> <span>${newPrice}</span> */}
                    </Typography>

                    {/* <Link href={`/buyNow/${_id}`} sx={{ width: '150px' }} underline="none">
                        <Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6', color: 'white', width: '100px' }}>Buy Now</Button>
                    </Link> */}

                </CardContent>
            </Card>
        </Grid>
    );
};

export default SingleCard;