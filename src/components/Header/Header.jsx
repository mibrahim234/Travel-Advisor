import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

const Header = () => {
    return (
       <AppBar position='static'>
        <Toolbar className={classes.toolbar}> 
        {/* Typography is everysingle text element and you can change the it to heading or subheading */}
        <Typography variant='h5' className={classes.title}>
        Travel Advisor 
        </Typography>
        </Toolbar> 

       </AppBar>
    );
}

export default Header; 