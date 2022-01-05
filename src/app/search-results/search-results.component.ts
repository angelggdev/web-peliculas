import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SearchResults } from '../models/search-results.model';
import { searchMovie } from '../store/movie-search/movie-search.actions';
import { MovieService } from '../services/movie.service';

class MovieResultsObject {
  searchResult: SearchResults;
  error?: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  movieList: Array<Movie>;
  search: string;
  loading: boolean = true;
  page = 1;
  totalPages: number;
  paginatorArray: Array<number>;
  error = false;

  constructor(
    private store: Store<{ searchResult: MovieResultsObject }>,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    //takes the search and page params from the url to dispatch the movie search action
    this.route.params.subscribe((data) => {
      this.search = data['search'];
      data['page'] && (this.page = parseInt(data['page']));
    });
    this.store.dispatch(searchMovie({ query: this.search, page: this.page }));
    this.store.select('searchResult').subscribe((data) => {
      if (data.error) {
        this.error = true;
      } else {
        this.movieList = data.searchResult?.results;
        this.totalPages = data.searchResult?.total_pages;
        this.paginatorArray = this.movieService.constructPaginator(
          this.page,
          this.totalPages
        );
        this.loading = false;
      }
    });
  }
}
