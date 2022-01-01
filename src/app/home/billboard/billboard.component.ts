import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  movieList: Array<Movie>;
  loading = true;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getBillboardMovies().subscribe(
      (data) => {
        this.movieList = data.results;
        this.loading = false;
        console.log(this.movieList)
      }
    )
  }

}
