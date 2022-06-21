import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// paper is div with a background color
// use media query makes map more responsive 
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles'; 

const Map = () => {
    // calling these with hooks 
    const classes = useStyles();
    // this will be set to false if mobile width is larger than 600px 
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, lng: 0 };
        return (
    <div className={classes.mapContainer}>
        {/* Need a bunch of props to use */}
        <GoogleMapReact
        // key from cloud site
            bootstrapURLKeys={{key: 'AIzaSyBCp9NPLvRhYX2rzFd593Q4HsPYsywpdPU'}}
            // default center of the map where we pass in the coord
            defaultCenter={coordinates}
            // current center of the map 
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            // Used when you click on a restaurant on the map
            onChildClick={''}

        >

    </GoogleMapReact>
     </div>

        );
}

export default Map; 