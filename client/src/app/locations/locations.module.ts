import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsFormComponent } from './locations-form/locations-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: LocationsListComponent },
  { path: 'new', component: LocationsFormComponent },
];

@NgModule({
  declarations: [LocationsListComponent, LocationsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule,
  ],
})
export class LocationsModule {}
