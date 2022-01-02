import { Action, createReducer, on } from "@ngrx/store";
import { loadBillboardMovies, loadBillboardMoviesFailure, loadBillboardMoviesSuccess } from './billboard-movies.actions';
import { Movie } from '../../models/movie.model';


const initialState = [] as Array<Movie>;

export const billboardMoviesReducer = createReducer(
    initialState,
    on(loadBillboardMoviesSuccess, (state, {billboardMovies}) => ({
        ...state,
        billboardMovies
    }))
)