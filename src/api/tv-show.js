import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "./config";

export class TVShowAPI{
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        console.log(response.data.results);
        return response.data.results;
        
        //return request

    }
}

// e0c3266600169a03841e9c74d205b562
// https://api.themoviedb.org/3/tv/popular?api_key=e0c3266600169a03841e9c74d205b562&language=en-US&page=1