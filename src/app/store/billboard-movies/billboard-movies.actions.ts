import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie.model";

export const loadBillboardMovies = createAction(
    '[BillboardMovies] Load BillboardMovies'
);

export const loadBillboardMoviesSuccess = createAction(
    '[BillboardMovies] Load BillboardMovies Success',
    props<{billboardMovies: Movie[]}>()
);

export const loadBillboardMoviesFailure = createAction(
    '[BillboardMovies] Load BillboardMovies Failure'
);

