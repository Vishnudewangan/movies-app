import { ADD_MOVIES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMoviesState, action) {
    if(action.type == ADD_MOVIES) {
        return {
            ...state,
            list: action.movies
        }  // this is spread operator which takes the current state and overwrites it with list: action.movies
    }
    return state;
}

