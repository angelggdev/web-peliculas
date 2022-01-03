import { createAction, props } from "@ngrx/store";
import { SearchResults } from "src/app/models/search-results.mode";

export const searchMovie = createAction(
    '[MovieSearch] SearchMovie',
    props<{query: string}>()
);

export const searchMovieSuccess = createAction(
    '[MovieSearch] SearchMovie Success',
    props<{searchResult: SearchResults}>()
);

export const searchMovieFailure = createAction(
    '[MovieSearch] SearchMovie Failure'
);