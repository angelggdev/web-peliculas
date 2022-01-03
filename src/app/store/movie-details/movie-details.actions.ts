import { createAction, props } from "@ngrx/store";
import { MovieCast } from "src/app/models/movie-cast.model";
import { MovieDetail } from "src/app/models/movie-detail.model";

export const loadMovieDetails = createAction(
    '[MovieDetails] Load MovieDetails',
    props<{id: number}>()
);

export const loadMovieDetailsSuccess = createAction(
    '[MovieDetails] Load MovieDetails Success',
    props<{movieDetail: MovieDetail}>()
);

export const loadMovieDetailsFailure = createAction(
    '[MovieDetails] Load MovieDetails Failure'
);

export const loadCast = createAction(
    '[MovieDetails] Load Cast',
    props<{id: number}>()
);

export const loadCastSuccess = createAction(
    '[MovieDetails] Load Cast Success',
    props<{cast: MovieCast}>()
);

export const loadCastFailure = createAction(
    '[MovieDetails] Load Cast Failure'
);

