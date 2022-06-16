import React from 'react'
// CssBaseline: component from mui that fixes padding bg colors for us 
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';

// functional app component 
const App= () => {
    return (
        // Call the components 
        <>
    <CssBaseline />
    <Header /> 
    {/* container grid for responsive design, inline styles so double curlyplace cuz its an object */}
    <Grid container spacing={3} style={{ width: '100%' }}>
        {/* Will take full width on mobile devices and md to lg it will be 4 spaces */}
        <Grid item xs={12} md={4}>
        <List /> 
        </Grid>

        <Grid item xs={12} md={8}>
        <Map /> 
        </Grid>
    </Grid>

        </>
    );
}

export default App; 