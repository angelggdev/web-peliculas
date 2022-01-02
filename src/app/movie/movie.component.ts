import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() posterPath:string;
  @Input() movieTitle:string;
  @Input() averageVote:number;
  @Input() movieId:number;
  starsConfig: Array<string>;

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.starsConfig = this.getStarsConfig(this.averageVote - 1);
  }

  getStarsConfig(number:number): Array<string>{
    return this.movieService.getStarsConfig(number);
  }

  getMovieDetails(id:number): void{
    this.router.navigateByUrl(`/pelicula/${id}`);
  }

}
