import { Component, OnInit } from '@angular/core';
import { EntitiesService, Entity } from '../entities.service';

@Component({
  selector: 'app-entities-list',
  templateUrl: './entities-list.component.html',
})
export class EntitiesListComponent implements OnInit {
  entities: Entity[] = [];

  constructor(private entitiesService: EntitiesService) {}

  ngOnInit() {
    this.entitiesService.getEntities().subscribe({
      next: (entities) => (this.entities = entities),
      error: (err) => console.error(err),
    });
  }
}
