import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchResults } from '../models/search-results.mode';
import { searchMovie } from '../store/movie-search/movie-search.actions';

class MovieResultsObject{
  searchResult: SearchResults
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userInput: string;

  constructor(
    private router: Router,
    private store: Store<{searchResult: MovieResultsObject}>

  ) { }

  ngOnInit(): void {
  }

  goHome():void{
    this.router.navigateByUrl('/');
  }

  onSubmit(){
    this.router.navigateByUrl(`/resultados/${this.userInput}/1`);
    this.store.dispatch(searchMovie({query: this.userInput, page: 1}));
  }
}
