import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {

  @Input() page: number;
  @Input() paginatorArray: number[];
  @Input() totalPages: number;

}
