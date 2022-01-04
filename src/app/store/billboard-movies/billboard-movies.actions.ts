import { createAction, props } from '@ngrx/store';
import { PlayingNow } from 'src/app/models/playing_now';

export const loadBillboardMovies = createAction(
  '[BillboardMovies] Load BillboardMovies',
  props<{ page: number }>()
);

export const loadBillboardMoviesSuccess = createAction(
  '[BillboardMovies] Load BillboardMovies Success',
  props<{ playingNow: PlayingNow }>()
);

export const loadBillboardMoviesFailure = createAction(
  '[BillboardMovies] Load BillboardMovies Failure'
);
