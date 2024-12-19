import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocationsService, Location } from '../locations.services';
import { Router } from '@angular/router';
import { Entity, EntitiesService } from 'src/app/entities/entities.service';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
})
export class LocationsFormComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    entityId: ['', Validators.required],
  });
  entities: Entity[] = [];
  constructor(
    private fb: FormBuilder,
    private locationsService: LocationsService,
    private entitiesService: EntitiesService,
    private router: Router
  ) {}
  ngOnInit() {
    this.entitiesService.getEntities().subscribe({
      next: (entities) => (this.entities = entities),
      error: (err) => console.error(err),
    });
  }
  submit() {
    if (this.form.valid) {
      this.locationsService
        .createLocation(this.form.value as Location)
        .subscribe({
          next: () => this.router.navigate(['/locations']),
          error: (err) => console.error(err),
        });
    }
  }
}
