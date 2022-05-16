import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie, PlayingNow } from '../models/movies.model';
import { MovieService } from '../services/movie.service';
import { loadBillboardMovies } from '../store/billboard-movies/billboard-movies.actions';
import { BillboardMoviesState } from '../store/billboard-movies/billboard-movies.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Array<Movie>;
  loading = true;
  page = 1;
  totalPages: number;
  paginatorArray: Array<number>;
  error = false;

  constructor(
    private store: Store<{ billboardMovies: BillboardMoviesState }>,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.setMovieData();
  }

  private setMovieData(): void {
    this.getUrlParams();
    this.loadBillobardMovies();
    this.selectBillboardMovies();
  }

  private getUrlParams(): void {
    //the component gets the page param from the url and loads the billboard movies of that page
    this.route.params.subscribe((data) => {
      data['page'] && (this.page = parseInt(data['page']));
    });
  }

  private loadBillobardMovies(): void {
    this.store.dispatch(loadBillboardMovies({ page: this.page }));
  }

  private selectBillboardMovies(): void {
    this.store.select('billboardMovies').subscribe((data) => {
      if (data?.error) {
        this.error = true;
      } else if (data?.playingNow) {
        this.movieList = data.playingNow.results;
        this.totalPages = data.playingNow?.total_pages;
        this.paginatorArray = this.movieService.constructPaginator(
          this.page,
          this.totalPages
        );
        this.loading = false;
      }
    });
  }

}
