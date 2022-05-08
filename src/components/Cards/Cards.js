import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../../redux/launchSlice';
import { Grid } from '@mui/material';

const Cards = ({ props }) => {
    // const [apiData, setAPIData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => dispatch(loadData(data)))
        // .then(data => setAPIData(data))
    }, []);



    // if (apiData) {
    //     apiData.map(l => console.log(l.upcoming));
    // }

    // console.log(apiData[0]);

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* {
                apiData.map(l => <SingleCard key={l.filgh_number} l={l} />)
            } */}
            <SingleCard />
        </Grid>

    );
};

export default Cards;