import React from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { searchByRocket } from '../../redux/launchSlice';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const NavBar = () => {

    const [currency, setCurrency] = React.useState('EUR');
    const [rocketText, setRocketText] = React.useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleRocket = e => {
        setRocketText(e.target.value);
        e.preventDefault();
    }
    // console.log(rocketText);

    const filterByRocket = useSelector(state => state.launch[0]).filter(l => l.rocket.rocket_name === rocketText);

    // console.log(filterByRocket);
    dispatch(searchByRocket(filterByRocket));

    return (
        <Grid container spacing={3} sx={{ my: 5 }}>
            <Grid item xs={6}>
                <TextField onChange={handleRocket} id="outlined-basic" placeholder='Search by Rocket' variant="outlined" />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    );
};

export default NavBar;