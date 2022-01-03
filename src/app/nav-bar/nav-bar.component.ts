import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userInput: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goHome():void{
    this.router.navigateByUrl('/');
  }

  onSubmit(){
    this.router.navigateByUrl(`/resultados/${this.userInput}`);
  }
}
