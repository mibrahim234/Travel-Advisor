import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

// Passing in props, placed place in list and using it here 
const PlaceDetails = ({ place }) => {
    const classes = useStyles(); 
    return (
        // elevation will give it a nice shadow effect 
    <Card elevation={6}>
        <CardMedia 
            style={{ height: 350 }}
            image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
            title={place.name }
        />

        {/* Price box/restaraunt name */}
    <CardContent>
        {/* Gutterbtm means margin bottom */}
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        {/* Rating icon box */}
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>

        {/* price box */}
        <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle1">Price</Typography>
        <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>

        {/* Ratingbox */}
        <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle1">Ranking</Typography>
        <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>

        {/* if restaurant has awards display it, my is for margin top/btm */}
        {place?.awards?.map((award) => (
            <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant="subtitle2" color="textSecondary">{award.display_name} </Typography>
            </Box>
        ))}

        {/* type of food restaurant serves */}
        {/* Need to know if you have something before you map over it */}
        {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className={classes.chip}/> 
        ))}

        {/* Address of restaurant */}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}

        {/* Phone number of cuisine */}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
    </CardContent>
            {/* lead us to restaurant address/website */}
            <CardActions>
                {/* window.open with blank will open a new tab when going to the site  */}
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>

    </Card>
        );
}

export default PlaceDetails; 