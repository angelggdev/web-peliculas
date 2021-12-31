import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getBillboardMovies(): Observable<any>{
    return this.http.get(environment.apiUrl + 'movie/now_playing', { 
      params: new HttpParams().set(
        "api_key", "b1343f8496a09f2dfdb1e6440a030a07"
        ).set(
          "language", "en-US"
        ).set(
          "page", 1
        ),
    })
  }
}
