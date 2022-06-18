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
        {/* In mui a box is like a div */}
        <Box display="flex">
            <Typography variant='h6' className={classes.title}>
            Explore new places
            </Typography>
            <Autocomplete>
               <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                </div> 
            </Autocomplete>
        </Box>
        </Toolbar> 

       </AppBar>
    );
}

export default Header; 