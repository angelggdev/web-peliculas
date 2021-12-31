import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getBillboardMovies().subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

}
