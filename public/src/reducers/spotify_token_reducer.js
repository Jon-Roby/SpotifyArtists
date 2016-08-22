import {
  FETCH_SPOTIFY_TOKEN
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SPOTIFY_TOKEN:
      return { ...state, error: '', token: action.payload };
  }

  return state;
}
