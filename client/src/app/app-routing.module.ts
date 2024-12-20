import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './users/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contractors',
    loadChildren: () =>
      import('./contractors/contractors.module').then(
        (m) => m.ContractorsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'entities',
    loadChildren: () =>
      import('./entities/entities.module').then((m) => m.EntitiesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'work-orders',
    loadChildren: () =>
      import('./work-orders/work-order.module').then((m) => m.WorkOrdersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'bills',
    loadChildren: () =>
      import('./bills/bills.module').then((m) => m.BillsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
