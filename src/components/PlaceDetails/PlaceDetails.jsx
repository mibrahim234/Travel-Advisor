import React from 'react';

// Passing in props, placed place in list and using it here 
const PlaceDetails = ({ place }) => {
    return (
        <h1>{place.name}</h1>
    );
}

export default PlaceDetails; 