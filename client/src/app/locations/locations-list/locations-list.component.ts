import { Component, OnInit } from '@angular/core';
import { LocationsService, Location } from '../locations.services';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
})
export class LocationsListComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.locationsService.getLocations().subscribe({
      next: (locations) => (this.locations = locations),
      error: (err) => console.error(err),
    });
  }
}
