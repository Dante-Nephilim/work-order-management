import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
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
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'work-orders',
    loadChildren: () =>
      import('./work-orders/work-order.module').then((m) => m.WorkOrdersModule),
  },
  {
    path: 'bills',
    loadChildren: () =>
      import('./bills/bills.module').then((m) => m.BillsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
