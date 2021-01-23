import axios from 'axios';


export default axios.create({
    baseURL: "https://upc.shamacon.us/grocy/",
    responseType: "json"
  });