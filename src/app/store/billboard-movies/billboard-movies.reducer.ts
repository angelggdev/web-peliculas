import { Action, createReducer, on } from '@ngrx/store';
import {
  loadBillboardMovies,
  loadBillboardMoviesFailure,
  loadBillboardMoviesSuccess,
} from './billboard-movies.actions';
import { Movie } from '../../models/movies.model';

const initialState = [] as Array<Movie>;

export const billboardMoviesReducer = createReducer(
  initialState,
  on(loadBillboardMoviesSuccess, (state, { playingNow }) => ({
    ...state,
    playingNow,
  })),
  on(loadBillboardMoviesFailure, (state) => ({
    ...state,
    error: 'Oops, something went wrong!'
  }))
);
