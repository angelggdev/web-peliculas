import { Component, Input } from '@angular/core';
import { Artist } from 'src/app/models/movies.model';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent {

  @Input() castMember: Artist;

}
