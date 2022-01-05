import { createReducer, on } from '@ngrx/store';
import { SearchResults } from 'src/app/models/search-results.model';
import { searchMovieSuccess } from './movie-search.actions';

const initialState = {} as SearchResults;

export const movieSearchReducer = createReducer(
  initialState,
  on(searchMovieSuccess, (state, { searchResult }) => ({
    ...state,
    searchResult,
  }))
);
