import {
  UPDATE_SEARCH_INPUT,
  FETCH_ARTIST_SEARCH_RESULTS
} from '../actions/types';

export default function(state = {
    searchInput: 'Search Spotify',
    searchResults: {}
  }, action) {
    switch (action.type) {

      case UPDATE_SEARCH_INPUT:
        return { ...state, searchInput: action.payload };

      case FETCH_ARTIST_SEARCH_RESULTS:
        return { ...state, searchResults: action.payload };
  }

  return state;
}
