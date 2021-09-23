import { Component } from '@angular/core';
import { archives } from '../archives';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css'],
})
export class ArchiveListComponent {
  constructor(private filterService: FilterService) {}

  archives = archives;
}
