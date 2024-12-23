import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorFormComponent } from './contractor-form/contractor-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: ContractorListComponent },
  { path: 'new', component: ContractorFormComponent },
];

@NgModule({
  declarations: [ContractorListComponent, ContractorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
})
export class ContractorsModule {}
