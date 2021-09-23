import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Archive, archives } from '../archives';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.css'],
})
export class ArchiveItemComponent implements OnInit {
  archive: Archive | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('archiveId'));

    this.archive = archives.find(
      (archive) => archive.id === productIdFromRoute
    );
  }
}
