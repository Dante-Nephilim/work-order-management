import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {
  ContractorsService,
  Contractor,
} from '../../contractors/contractors.service';
import { Router } from '@angular/router';
import {
  LocationsService,
  Location,
} from 'src/app/locations/locations.services';
import { WorkOrdersService, WorkOrder } from '../work-order.service';

@Component({
  selector: 'app-work-order-form',
  templateUrl: './work-order-form.component.html',
})
export class WorkOrderFormComponent implements OnInit {
  contractors: Contractor[] = [];
  allLocations: Location[] = [];
  availableLocations: Location[] = [];

  mainForm = this.fb.group({
    contractorId: ['', Validators.required],
    paymentTerms: [null, [Validators.required, Validators.min(1)]],
    dueDate: ['', Validators.required],
    locations: this.fb.array([]),
  });

  addingLocation = false;
  locationForm = this.fb.group({
    locationId: ['', Validators.required],
    name: [{ value: '', disabled: true }],
    rate: [null, [Validators.required, Validators.min(1)]],
    quantity: [null, [Validators.required, Validators.min(1)]],
  });

  get locationsFormArray(): FormArray {
    return this.mainForm.get('locations') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private contractorsService: ContractorsService,
    private locationsService: LocationsService,
    private workOrdersService: WorkOrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contractorsService.getContractors().subscribe({
      next: (data) => (this.contractors = data),
      error: (err) => console.error(err),
    });

    this.locationsService.getLocations().subscribe({
      next: (data) => {
        this.allLocations = data;
        this.availableLocations = [...data];
      },
      error: (err) => console.error(err),
    });
  }

  startAddingLocation() {
    this.addingLocation = true;
    this.locationForm.reset();
    this.locationForm.patchValue({ name: '' });
  }

  cancelAddingLocation() {
    this.addingLocation = false;
    this.locationForm.reset();
  }

  onLocationChange() {
    const locationId = this.locationForm.value.locationId;
    const loc = this.availableLocations.find((l) => l._id === locationId);
    if (loc) {
      this.locationForm.patchValue({ name: loc.name });
    } else {
      this.locationForm.patchValue({ name: '' });
    }
  }

  addLocation() {
    if (this.locationForm.valid) {
      const { locationId, name, rate, quantity } =
        this.locationForm.getRawValue();

      const locGroup = this.fb.group({
        locationId: [locationId, Validators.required],
        rate: [rate, [Validators.required, Validators.min(1)]],
        quantity: [quantity, [Validators.required, Validators.min(1)]],
      });

      this.locationsFormArray.push(locGroup);

      this.availableLocations = this.availableLocations.filter(
        (l) => l._id !== locationId
      );

      this.addingLocation = false;
      this.locationForm.reset();
    }
  }

  submit() {
    if (this.mainForm.valid) {
      const formValue = this.mainForm.value;

      const contractorId = formValue.contractorId!;
      const paymentTerms = Number(formValue.paymentTerms);
      const dueDate = new Date(formValue.dueDate!);
      const locations = (formValue.locations || []).map((loc: any) => ({
        locationId: loc.locationId,
        rate: Number(loc.rate),
        name: loc.name,
        quantity: Number(loc.quantity),
      }));

      const payload: WorkOrder = {
        contractorId,
        paymentTerms,
        dueDate,
        locations,
      };

      this.workOrdersService.createWorkOrder(payload).subscribe({
        next: () => this.router.navigate(['/work-orders']),
        error: (err) => console.error(err),
      });
    }
  }

  getLocationNameById(id: string): string {
    const loc = this.allLocations.find((l) => l._id === id);
    return loc ? loc.name : 'Unknown';
  }
}
