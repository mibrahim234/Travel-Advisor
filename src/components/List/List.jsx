import React from 'react';
// circularprogress is loading bar 
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={} onChange={}>
                    <MenuItem value="restaurants"></MenuItem>
                    <MenuItem value="hotels"></MenuItem>
                    <MenuItem value="attractions"></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default List; 