import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderFormComponent } from './work-order-form/work-order-form.component';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: WorkOrderListComponent },
  { path: 'new', component: WorkOrderFormComponent },
];

@NgModule({
  declarations: [WorkOrderListComponent, WorkOrderFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
})
export class WorkOrdersModule {}
