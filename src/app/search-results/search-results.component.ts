import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SearchResults } from '../models/search-results.mode';
import { searchMovie } from '../store/movie-search/movie-search.actions';

class MovieResultsObject{
  searchResult: SearchResults
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  movieList: Array<Movie>;
  search: string;
  loading: boolean = true;

  constructor(
    private store: Store<{searchResult: MovieResultsObject}>
  ) { }

  ngOnInit(): void {
    this.store.select('searchResult').subscribe((data) => {
      this.movieList = data.searchResult?.results;
      this.loading = false;
    });

  }

}
