import { Component, OnInit } from '@angular/core';
import { BillService, Bill } from '../bills.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  generatePdf() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Bills', 10, 10);
    doc.setFontSize(12);
    doc.text('This is a document containing bills', 10, 20);
    const headers = [['Bill Number', 'contractorId', 'Total Amount']];
    const data = this.bills.map((b) => [
      b.billNumber,
      b.contractorId,
      b.totalAmount,
    ]);
    autoTable(doc, {
      head: headers,
      body: data,
      startY: 30,
    });
    doc.save('bills.pdf');
  }
}
