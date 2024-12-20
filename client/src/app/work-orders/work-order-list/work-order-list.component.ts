import { Component, OnInit } from '@angular/core';
import { WorkOrdersService, WorkOrder } from '../work-order.service';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
})
export class WorkOrderListComponent implements OnInit {
  workOrders: WorkOrder[] = [];

  constructor(private workOrdersService: WorkOrdersService) {}

  ngOnInit() {
    this.workOrdersService.getWorkOrders().subscribe({
      next: (workOrders) => (this.workOrders = workOrders),
      error: (err) => console.error(err),
    });
  }
  sortUsingPaymentTerms() {
    this.workOrdersService.getWorkOrdersSortedByPaymentTerms().subscribe({
      next: (workOrders) => (this.workOrders = workOrders),
      error: (err) => console.error(err),
    });
  }
  filterUsingDate(event: any) {
    console.log(event);
    this.workOrdersService
      .getWorkOrdersFilteredByDate(event.target.value)
      .subscribe({
        next: (workOrders) => (this.workOrders = workOrders),
        error: (err) => console.error(err),
      });
  }
}
