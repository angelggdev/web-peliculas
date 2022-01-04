import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SearchResults } from '../models/search-results.mode';
import { searchMovie } from '../store/movie-search/movie-search.actions';

class MovieResultsObject {
  searchResult: SearchResults;
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

  constructor(
    private store: Store<{ searchResult: MovieResultsObject }>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.search = data['search'];
      data['page'] && (this.page = parseInt(data['page']));
    });
    this.store.dispatch(searchMovie({ query: this.search, page: this.page }));
    this.store.select('searchResult').subscribe((data) => {
      this.movieList = data.searchResult?.results;
      this.totalPages = data.searchResult?.total_pages;
      this.constructPaginator();
      this.loading = false;
    });
  }

  constructPaginator() {
    let _paginatorArray: Array<number> = [];
    if (this.page < this.totalPages - 6) {
      for (let i = 0; i < 6; i++) {
        _paginatorArray.push(this.page + i);
      }
    } else {
      console.log('ok');
      for (let i = 6; i >= 0; i--) {
        _paginatorArray.push(this.totalPages - i);
      }
    }
    if (!_paginatorArray.includes(NaN)) this.paginatorArray = _paginatorArray;
  }
}
