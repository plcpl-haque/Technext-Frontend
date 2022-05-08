import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../../redux/launchSlice';

const Cards = ({ props }) => {
    const [apiData, setAPIData] = useState([]);
    const [singleLaunch, setSingleLaunch] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => dispatch(loadData(data)))
    }, []);



    // if (apiData) {
    //     apiData.forEach(l => setSingleLaunch(l));
    // }

    // console.log(singleLaunch);

    return (
        // {
        //     if(apiData) {
        //         apiData.map(l => console.log(l))
        //     }
        // }

        <SingleCard />
    );
};

export default Cards;