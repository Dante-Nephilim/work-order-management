import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from './entities-list/entities-list.component';
import { EntitiesFormComponent } from './entities-form/entities-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: EntitiesListComponent },
  { path: 'new', component: EntitiesFormComponent },
];

@NgModule({
  declarations: [EntitiesListComponent, EntitiesFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class EntitiesModule {}
