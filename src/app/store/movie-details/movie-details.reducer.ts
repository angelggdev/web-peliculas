import { createReducer, on } from '@ngrx/store';
import {
  loadMovieDetailsSuccess,
  loadCastSuccess,
} from './movie-details.actions';
import { MovieDetail } from 'src/app/models/movie-detail.model';

const initialState = {} as MovieDetail;

export const movieDetailReducer = createReducer(
  initialState,
  on(loadMovieDetailsSuccess, (state, { movieDetail }) => ({
    ...state,
    movieDetail,
  })),
  on(loadCastSuccess, (state, { cast }) => ({
    ...state,
    cast,
  }))
);
