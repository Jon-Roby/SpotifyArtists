import {
  FETCH_ARTIST,
  FETCH_ARTISTS
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTIST:
      return { ...state, artist: action.payload };
    case FETCH_ARTISTS:
      return { ...state, artists: action.payload };
  }

  return state;
}
