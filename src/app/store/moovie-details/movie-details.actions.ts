import { createAction, props } from "@ngrx/store";
import { MovieDetail } from "src/app/models/movie-detail.model";

export const loadMovieDetails = createAction(
    '[BillboardMovies] Load BillboardMovies',
    props<{id: number}>()
);

export const loadMovieDetailsSuccess = createAction(
    '[BillboardMovies] Load BillboardMovies Success',
    props<{movieDetail: MovieDetail}>()
);

export const loadMovieDetailsFailure = createAction(
    '[BillboardMovies] Load BillboardMovies Failure'
);

