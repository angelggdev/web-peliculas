import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieDetail } from '../models/movie-detail.model';
import { MovieService } from '../services/movie.service';
import { loadMovieDetails } from '../store/moovie-details/movie-details.actions';

class MovieDetailObject {
  movieDetail: MovieDetail;
}
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetails: MovieDetail;
  movieId: number;
  loading = true;
  starsConfig: Array<string>;

  constructor(
    private store: Store<{movieDetail: MovieDetailObject}>,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => this.movieId = parseInt(res['id']));
    this.store.dispatch(loadMovieDetails({id: this.movieId}));
    this.store.select('movieDetail').subscribe((data) => {
      this.movieDetails = data.movieDetail;
      this.loading = false;
      this.starsConfig = this.movieService.getStarsConfig(data.movieDetail?.vote_average);
    });
  }

}
