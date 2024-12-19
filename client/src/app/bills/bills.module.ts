import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillListComponent } from './bill-list/bill-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: BillListComponent }];

@NgModule({
  declarations: [BillListComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class BillsModule {}
