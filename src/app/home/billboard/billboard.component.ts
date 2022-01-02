import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { loadBillboardMovies, loadBillboardMoviesSuccess } from 'src/app/store/billboard-movies/billboard-movies.actions';
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  @Input() movieList: Movie[];
  @Input() loading: boolean;


  constructor() { 
    
  }

  ngOnInit(): void {    

  }

}
