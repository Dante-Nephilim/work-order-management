import { Component, OnInit } from '@angular/core';
import { DashboardData, DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  dashboardData: DashboardData = {
    totalContractors: 0,
    totalEntities: 0,
    totalLocations: 0,
    totalWorkOrders: 0,
    totalBills: 0,
  };
  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
    });
  }
}
