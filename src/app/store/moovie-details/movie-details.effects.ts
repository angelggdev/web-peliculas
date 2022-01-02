import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { map, catchError, mergeMap} from 'rxjs/operators';
import { MovieService } from "src/app/services/movie.service";
import { loadMovieDetails, loadMovieDetailsFailure, loadMovieDetailsSuccess } from "./movie-details.actions";

@Injectable()
export class MovieDetailsEffects {

    loadMovieDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadMovieDetails),
            mergeMap(({id}) => {
                return this.movieService.getMovieDetails(id).pipe(
                map(movieDetail => loadMovieDetailsSuccess({movieDetail})),
                catchError(() => of(loadMovieDetailsFailure()))
              )})
        )
    })

    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ){}

}

