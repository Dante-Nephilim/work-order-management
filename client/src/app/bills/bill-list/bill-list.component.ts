import { Component, OnInit } from '@angular/core';
import { BillService, Bill } from '../bills.service';

@Component({
  selector: 'app-bill-list',
  template: `
    <h2>Bills</h2>
    <button (click)="runBills()" class="btn btn-primary">Run Bills</button>
    <ul *ngIf="bills.length > 0" class="mt-3">
      <li *ngFor="let b of bills">
        <h3>{{ b.billNumber }} - Total: {{ b.totalAmount }}</h3>
        <ul>
          <li *ngFor="let loc of b.locations">
            {{ loc.name }} (LocationID: {{ loc.locationId }}) - Rate:
            {{ loc.rate }}, Qty: {{ loc.quantity }}
          </li>
        </ul>
      </li>
    </ul>
  `,
})
export class BillListComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billService: BillService) {}

  ngOnInit() {
    this.fetchBills();
  }

  fetchBills() {
    this.billService.getBills().subscribe({
      next: (data) => (this.bills = data),
      error: (err) => console.error(err),
    });
  }

  runBills() {
    this.billService.runBills().subscribe({
      next: (response) => {
        console.log(response.message);
        this.bills = response.bills;
      },
      error: (err) => console.error(err),
    });
  }
}
