// {
//     type: 'ADD_MOVIES',
//     movies:[m1,m2,m3]
    
// }
// {
//     type: 'DECREASE_COUNT'
// }
 
// action types
export  const ADD_MOVIES ='ADD_MOVIES';
export const ADD_FAVOURITES ='ADD_FAVOURITES';

// action creators

export function addMovies (movies)
{
    return {
        type: ADD_MOVIES,
        movies: movies
    }

}

export function addFavourite (movie)
{
    return {
        type: ADD_FAVOURITES,
        movie: movie
    }
}