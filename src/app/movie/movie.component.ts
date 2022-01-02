import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() posterPath:string;
  @Input() movieTitle:string;
  @Input() averageVote:number;
  starsConfig: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.starsConfig = this.getStarsConfig(this.averageVote - 1);
  }

  getStarsConfig(number:number): Array<string>{
    let starsArray:Array<string> = [];

    for (let i = 0; i < 10; i++) {
      
      if ( number <= i-0.4 && number >= i-0.6){
        starsArray.push('half-full')
      } else if (i <= Math.round(number)){
        starsArray.push('full');
      } else {
        starsArray.push('blank')
      }
      
    }
    return starsArray;
  }

}
