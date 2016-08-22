import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  FETCH_SPOTIFY_TOKEN,
  FETCH_ARTIST,
  FETCH_ARTISTS,
  UPDATE_SEARCH_INPUT,
  FETCH_ARTIST_SEARCH_RESULTS
} from './types';

var root_url;

if (process.env.NODE_ENV === 'development') {
  root_url = 'http://localhost:3000/api';
} else {
  root_url = 'https://agile-depths-61195.herokuapp.com/api'
}

export function fetchSpotifyToken(id) {
  return function(dispatch) {
    axios.get(`${root_url}/spotify`)
      .then(response => {
        dispatch({
          type: FETCH_SPOTIFY_TOKEN,
          payload: response.data
        });
        localStorage.setItem('token', response.data.access_token);

      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function fetchArtist(id) {
  var getArtist = axios.get(`${root_url}/artists/${id}`, {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: FETCH_ARTIST,
    payload: getArtist
  }

}

export function updateSearchInput(input) {
  return {
    type: UPDATE_SEARCH_INPUT,
    payload: input
  }
}

export function fetchArtistSearchResults(input) {
  let inputEncoded = input.split(" ").join("%20");

  // The Spotify Search API will return data even if the input string is ''.
  // So in the event that a user types some input and then deletes all of it,
  // an empty payload must be returned.
  if (inputEncoded !== '') {
    return function(dispatch) {
      axios.get(`https://api.spotify.com/v1/search?q=${inputEncoded}&type=artist`)
        .then(response => {
          dispatch({
            type: FETCH_ARTIST_SEARCH_RESULTS,
            payload: response.data
          })
        })
        .catch(err => {
          console.log("err ", err);
        })
    }
  } else {
    return {
      type: FETCH_ARTIST_SEARCH_RESULTS,
      payload: {}
    }
  }
}
