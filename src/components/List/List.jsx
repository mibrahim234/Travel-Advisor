import React, { useState } from 'react';
// circularprogress is loading bar 
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    // first thing is the state, second thing is a function that modifies the state, accepts one param
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
          {/* Select data has to be modified using state */}
          {/* onChange: gives us a callback function that has the event as the parameter */}
          {/* e.target.value will be populated with the data the user searches for */}
     <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

                    {/* Rating formcontrol */}
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
     <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default List; 