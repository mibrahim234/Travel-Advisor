// helps us make api calls
import axios from 'axios'; 

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  
export const getPlacesData = async (sw, ne) => {
    try {
        // more interested in data from response so we destructure ;  url and options is parameters
        const { data: { data } } = await axios.get(URL, {
            params: {
                // bottom left is southwest; top right is north east 
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
      'X-RapidAPI-Key': 'c3d4e748ddmsh0a4b9dabe4343cap1a7829jsn7145037507c8',
     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data; 
    } catch (error) {
        console.log(error)
    }   
} 