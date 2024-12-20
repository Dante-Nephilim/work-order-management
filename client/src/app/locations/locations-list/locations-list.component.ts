import { Component, OnInit } from '@angular/core';
import { LocationsService, Location } from '../locations.services';
import { Contractor } from 'src/app/contractors/contractors.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
})
export class LocationsListComponent implements OnInit {
  locations: Location[] = [];
  showCompletionForm = false;
  selectedLocation: Location | null = null;
  contractorOptions: Contractor[] = [];
  selectedContractorId = '';

  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.locationsService.getLocations().subscribe({
      next: (data) => (this.locations = data),
      error: (err) => console.error(err),
    });
  }
  sortUsingName() {
    console.log('Sorting locations by name');
    this.locationsService.getLocationsSortedByName().subscribe({
      next: (data) => (this.locations = data),
      error: (err) => console.error(err),
    });
  }
  filterByState() {
    console.log('Filtering locations by state');
    this.locationsService.getLocationsCompleted().subscribe({
      next: (data) => (this.locations = data),
      error: (err) => console.error(err),
    });
  }
  completeLocation(location: Location) {
    this.selectedLocation = location;
    this.selectedContractorId = '';
    this.showCompletionForm = true;

    this.locationsService.getContractorsForLocation(location._id).subscribe({
      next: (contractors) => (this.contractorOptions = contractors),
      error: (err) => console.error(err),
    });
  }

  cancelCompletion() {
    this.showCompletionForm = false;
    this.selectedLocation = null;
    this.contractorOptions = [];
  }

  submitCompletion() {
    if (!this.selectedLocation || !this.selectedContractorId) return;

    this.locationsService
      .markLocationCompleted(
        this.selectedLocation._id,
        this.selectedContractorId
      )
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.showCompletionForm = false;
          this.selectedLocation = null;
          this.fetchLocations(); // Refresh the list to see updated state
        },
        error: (err) => console.error(err),
      });
  }
}
