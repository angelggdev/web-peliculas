import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
})
export class BillboardComponent implements OnInit {
  @Input() movieList: Movie[];
  @Input() loading: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getMovieDetails(id: number): void {
    this.router.navigateByUrl(`/pelicula/${id}`);
  }
}
