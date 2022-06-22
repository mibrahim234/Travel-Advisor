// helps us make api calls
import axios from 'axios'; 

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': 'c3d4e748ddmsh0a4b9dabe4343cap1a7829jsn7145037507c8',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

export const getPlacesData = async () => {
    try {
        // request
        // more interested in data from response so we destructure 
        // url and options is parameters
        const { data: { data }} = await axios.get(URL, options);
        return data; 
    } catch (error) {
        console.log(error)
    }
}