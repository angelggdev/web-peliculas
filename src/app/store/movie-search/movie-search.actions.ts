import { createAction, props } from '@ngrx/store';
import { SearchResults } from 'src/app/models/movies.model';

export const searchMovie = createAction(
  '[MovieSearch] SearchMovie',
  props<{ query: string; page: number }>()
);

export const searchMovieSuccess = createAction(
  '[MovieSearch] SearchMovie Success',
  props<{ searchResult: SearchResults }>()
);

export const searchMovieFailure = createAction(
  '[MovieSearch] SearchMovie Failure'
);
