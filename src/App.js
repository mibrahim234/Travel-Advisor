import React, { useState, useEffect } from 'react'
// CssBaseline: component from mui that fixes padding bg colors for us 
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';

// functional app component 
const App= () => {
    // state for restuarant data 
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates ] = useState({});
    const [ bounds, setBounds ] = useState = (null);

    const [childClicked, setChildClicked] = useState(null);

    // useeffect to get users location
    // geolocation is built in with user's api 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });
        });
      }, []);

    // useEffect function that accepts another callback function
    // if dependency array is empty code will only run at the start 
    // getplacesdata is a async function so we have to call .then 
    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
        // we grab the data with .then and sent them to the state 
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds]);
    return (
        // Call the components 
        <>
    <CssBaseline />
    <Header /> 
    {/* container grid for responsive design, inline styles so double curlyplace cuz its an object */}
    <Grid container spacing={3} style={{ width: '100%' }}>
        {/* Will take full width on mobile devices and md to lg it will be 4 spaces */}
        <Grid item xs={12} md={4}>
        <List
         places={places}
         childClicked={childClicked}
         /> 
        </Grid>

        <Grid item xs={12} md={8}>
             {/* Pass setting functions of state above as props to map */}
             {/* when props get complicated use redux or react context */}
             {/* Restuarant places will show up on map now */}
        <Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={places}
        setChildClicked={setChildClicked}
        /> 
        </Grid>
    </Grid>

        </>
    );
}

export default App; 