import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import spotifyTokenReducer from './spotify_token_reducer';
import artistReducer from './artist_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  spotifyToken: spotifyTokenReducer,
  artist: artistReducer,
  routing: routerReducer,
  search: searchReducer
});

export default rootReducer;
