import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Artist, MovieCast, MovieDetail } from '../models/movies.model';
import { MovieService } from '../services/movie.service';
import {
  loadCast,
  loadMovieDetails,
} from '../store/movie-details/movie-details.actions';
import { Location } from '@angular/common';

class MovieDetailObject {
  movieDetail: MovieDetail;
  cast: MovieCast;
  error?: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetails: MovieDetail;
  movieId: number;
  loading = true;
  starsConfig: Array<string>;
  cast: Array<Artist>;
  error = false;

  constructor(
    private store: Store<{ movieDetailReducer: MovieDetailObject }>,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    //the component gets the id param from the url to dispatch loadMovieDetails and loadMovieCast
    this.route.params.subscribe((res) => (this.movieId = parseInt(res['id'])));
    this.store.dispatch(loadMovieDetails({ id: this.movieId }));
    this.store.dispatch(loadCast({ id: this.movieId }));
    this.store.select('movieDetailReducer').subscribe((data) => {
      if (data.error) {
        this.error = true;
      } else {
        this.movieDetails = data.movieDetail;
        this.starsConfig = this.movieService.getStarsConfig(
          data.movieDetail?.vote_average
        );
        this.cast = data.cast?.cast;
        this.loading = false;
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
