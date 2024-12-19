import { Component, OnInit } from '@angular/core';
import { BillService, Bill } from '../bills.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
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
