import { createReducer, on } from '@ngrx/store';
import {
  loadBillboardMoviesFailure,
  loadBillboardMoviesSuccess,
} from './billboard-movies.actions';
import { PlayingNow } from '../../models/movies.model';

export interface BillboardMoviesState {
  playingNow: PlayingNow;
  error?: string;
}

const initialState: BillboardMoviesState = {
  playingNow: {} as PlayingNow,
};

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
