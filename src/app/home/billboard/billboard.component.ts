import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movies.model';
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
})
export class BillboardComponent {

  @Input() movieList: Movie[] = [];
  @Input() loading: boolean;

  constructor(private router: Router) {}

  //this function navigates to the movie details, where the movie detail state will be handled
  getMovieDetails(id: number): void {
    this.router.navigateByUrl(`/pelicula/${id}`);
  }
}
