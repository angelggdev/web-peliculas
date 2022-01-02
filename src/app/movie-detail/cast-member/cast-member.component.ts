import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss']
})
export class CastMemberComponent implements OnInit {

  @Input() castMember: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
