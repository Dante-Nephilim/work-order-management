import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contractors',
    loadChildren: () =>
      import('./contractors/contractors.module').then(
        (m) => m.ContractorsModule
      ),
  },
  {
    path: 'entities',
    loadChildren: () =>
      import('./entities/entities.module').then((m) => m.EntitiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
