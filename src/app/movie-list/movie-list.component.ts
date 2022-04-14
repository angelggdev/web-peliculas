import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {

  @Input() movieList: Movie[];
  @Input() loading: boolean;

}
