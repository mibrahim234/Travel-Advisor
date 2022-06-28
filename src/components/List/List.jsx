import React, { useState, useEffect, createRef } from 'react';
// circularprogress is loading bar 
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = ( { places, childClicked, isLoading } ) => {
    const classes = useStyles();
    // first thing is the state, second thing is a function that modifies the state, accepts one param
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    // State that will contain all the references
    // the places will fill up this states' []
    const [elRefs, setElRefs] = useState([]);

    // recall this useEffect everytime the places change
    //.fill will start filling the array
    // then map the array, _ means don't use first param, but need the second one
    // return refs i or if its doesnt exist create a new ref
    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        
        setElRefs(refs);
      }, [places]);

    return (
        <div className={classes.container}>
        <Typography variant="h4">Food AND Dining around you</Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel id="type">Type</InputLabel>

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
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>

            {/* Give each grid a ref item */}
            <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <PlaceDetails 
                selected={Number(childClicked) === i} refProp={elRefs[i]} 
                place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
        </div>
    );
}

export default List; 