import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayingNow } from '../models/playing_now';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  //this functio returns an API call for the billboard movies
  getBillboardMovies(page: number): Observable<PlayingNow> {
    return this.http.get(environment.apiUrl + 'movie/now_playing', {
      params: new HttpParams()
        .set('api_key', environment.api_key)
        .set('language', 'es')
        .set('page', page),
    }) as Observable<PlayingNow>;
  }

  //this function returns the API call for the search results
  searchMovie(searchQuery: string, page: number): Observable<any> {
    return this.http.get(environment.apiUrl + 'search/movie', {
      params: new HttpParams()
        .set('query', searchQuery)
        .set('api_key', environment.api_key)
        .set('language', 'es')
        .set('page', page),
    });
  }

  //this function returns the API call for the details of a movie
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `movie/${id}`, {
      params: new HttpParams()
        .set('api_key', environment.api_key)
        .set('language', 'es'),
    });
  }

  //this function returns the API call for the cast members of a movie
  getCast(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `movie/${id}/credits`, {
      params: new HttpParams()
        .set('api_key', environment.api_key)
        .set('language', 'es'),
    });
  }

  /*  
  this function return an array of string to determine how the rating stars will be displayed
  - half-full will return a half-full star 
  - full will return a full star
  - blank won't return anything  
  example: 
  a rating of 7.5 will return the array: 
    ['full','full','full','full','full','full','full','half-full','blank','blank']
  to display 7 full stars and a half-star
  */
  getStarsConfig(number: number): Array<string> {
    let starsArray: Array<string> = [];

    for (let i = 0; i < 10; i++) {
      if (number <= i - 0.4 && number >= i - 0.6) {
        starsArray.push('half-full');
      } else if (i <= Math.round(number)) {
        starsArray.push('full');
      } else {
        starsArray.push('blank');
      }
    }
    return starsArray;
  }

  // this function returns an array with the pages contained in the paginator
  constructPaginator(page:number, totalPages:number): Array<number>  {
    let _paginatorArray: Array<number> = [];
    if (page < totalPages - 6) {
      for (let i = 0; i < 6; i++) {
        _paginatorArray.push(page + i);
      }
    } else {
      for (let i = 6; i >= 0; i--) {
        _paginatorArray.push(totalPages - i);
      }
    }
    _paginatorArray = _paginatorArray.filter(x => x>0);
    if (!_paginatorArray.includes(NaN)) {
      return _paginatorArray
    } else {
      return []
    }
  }
}
