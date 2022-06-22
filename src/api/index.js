// helps us make api calls
import axios from 'axios'; 

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      restaurant_tagcategory_standalone: '10591',
      restaurant_tagcategory: '10591',
      limit: '30',
      currency: 'USD',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US'
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

const getPlacesData = async () => {
    try {
        // request
        const response = await axios.get();
    } catch (errpr) {

    }
}